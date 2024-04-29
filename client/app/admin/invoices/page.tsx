"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import { HeadingComponent } from "../../utils/heading";
import DashboardHeader from "../../../app/components/Admin/DashboardHeader";
import AllInvoices from "../../../app/components/Admin/Order/AllInvoices";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <HeadingComponent
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <AllInvoices />
        </div>
      </div>
    </div>
  );
};

export default page;
