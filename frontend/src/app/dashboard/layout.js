"use client"
import BottomNavbar from "@/components/dashboard/BottomNavbar";
import Sidebar from "@/components/dashboard/Sidebar";
import React, { useState } from "react";

const layout = ({ children }) => {

  return (
    <div className="flex flex-col bg-[#FAF8FF]">
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        {/* left side */}
        <div className="hidden lg:block w-full lg:w-[20%]">
          <Sidebar />
        </div>
        {/* right side */}
        <div className="w-full pb-28 md:pb-0  lg:w-[80%] h-screen  overflow-y-auto">
          {children}
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default layout;
