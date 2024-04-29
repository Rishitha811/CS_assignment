"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import { HeadingComponent } from "../../utils/heading";
import DashboardHeader from "../../components/Admin/DashboardHeader";
import UserAnalytics from "../../components/Admin/Analytics/UserAnalytics";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <HeadingComponent />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <UserAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;
