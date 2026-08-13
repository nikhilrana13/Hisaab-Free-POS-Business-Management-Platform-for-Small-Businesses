"use client"
import BottomNavbar from "@/components/dashboard/BottomNavbar";
import Sidebar from "@/components/dashboard/Sidebar";
import { LocationProvider } from "@/context/LocationContext";
import AuthMiddleware from "@/middlewares/AuthMiddleware";
import React, { useState } from "react";

const layout = ({ children }) => {

  return (
    <AuthMiddleware>
    <LocationProvider>
       <div className="flex flex-col bg-[#FAF8FF]">
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        {/* left side */}
        <div className="hidden xl:block w-full lg:w-[20%]">
          <Sidebar />
        </div>
        {/* right side */}
        <div className="w-full pb-40 md:pb-0  xl:w-[80%] h-screen  overflow-y-auto">
          {children}
        </div>
      </div>
      <BottomNavbar />
    </div>
    </LocationProvider>
    </AuthMiddleware>
  
  );
};

export default layout;
