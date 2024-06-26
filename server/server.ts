require("dotenv").config();
import { app } from './app';
import http from 'http';
import { initSocketServer } from './socketServer';
import connectDB from './utils/db';
import { v2 as cloudinary } from 'cloudinary'
const server = http.createServer(app);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY
});

initSocketServer(server);

server.listen(process.env.PORT, () => {
  console.log(`Server is connected with port ${process.env.PORT}`);
  connectDB()
});