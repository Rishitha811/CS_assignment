"use client";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminProtected from "@/app/hooks/adminProtected";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import EditCategories from "../../components/Admin/Customization/EditCategories";
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
            <EditCategories />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
