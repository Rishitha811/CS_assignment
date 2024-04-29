"use client";
import DashboardHero from "../../components/Admin/DashboardHero";
import AdminProtected from "../../hooks/adminProtected";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import AllCourses from "../../components/Admin/Course/AllCourses";
import { HeadingComponent } from "../../utils/heading";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <HeadingComponent/>
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <AllCourses />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
