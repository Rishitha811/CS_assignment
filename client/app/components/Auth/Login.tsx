"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../styles/style";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
  refetch: any;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please nter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Login: FC<Props> = ({setRoute, setOpen, refetch}) => {
  const [show, setShow] = useState(false);
  const [login, { isSuccess, error }] = useLoginMutation();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      await login({ email, password });
    },
  });
  useEffect(() => {
    if (isSuccess) {
      toast.success("Logged in Successfully!");
      setOpen(false);
      refetch();
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Login with Jobnut</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className={`${styles.label}`}>
          {" "}
          Enter your email
        </label>
        <input
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={`${errors.email && touched.email && "border-red-500"} ${
            styles.input
          }`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label htmlFor="password" className={`${styles.label}`}>
            {" "}
            Enter your password{" "}
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={`${
              errors.password && touched.password && "border-red-500"
            } ${styles.input}`}
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>
        <div className="w-full mt-5">
          <input type="submit" value="Login" className={`${styles.button}`} />
        </div>
        <br />
        <h5 className="text-center pt-4 text-[14px] text-black dark:text-white">
          Or Join With
        </h5>
        <br />
        <div className="flex items-center justify-center my-3">
          <FcGoogle
            className="cursor-pointer mr-2"
            size={30}
            onClick={() => signIn("google")}
          />
          {/* <AiFillGithub
            className="cursor-pointer ml=2 fill-black dark:fill-white"
            size={30}
            onClick={() => signIn("github")}
          /> */}
        </div>
        <h5 className="text-center pt-4 text-[14px] text-black dark:text-white">
          Don't have an account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Sign-up")}
          >
            Sign-up
          </span>
        </h5>
      </form>
      <br />
    </div>
  );
};

export default Login;
