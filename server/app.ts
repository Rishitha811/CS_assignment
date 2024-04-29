require("dotenv").config();
const express = require("express");

import cors from "cors";
import helmet from "helmet";
import csurf from "csurf";
import cookieParser from "cookie-parser";
import ErrorMiddleware from "./middleware/error";
import { Request, Response, NextFunction } from "express";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRouter from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.route";
import layoutRouter from "./routes/layout.route";
import rateLimit from "express-rate-limit";

export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true
  })
);

app.use(helmet());

const limit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use("/api", userRouter, courseRouter, orderRouter, notificationRouter, analyticsRouter, layoutRouter);

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Test successful",
  });
});

//Handling Unknown Routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;

  err.statusCode = 404;
  next(err);
});

app.use(csurf());
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.cookie("mytoken", req.csrfToken());
  next();
});

app.use(limit)
app.use(ErrorMiddleware);
