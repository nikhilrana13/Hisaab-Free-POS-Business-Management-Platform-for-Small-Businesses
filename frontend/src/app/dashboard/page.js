"use client";
import QuickactionCard from "@/components/dashboard/QuickactionCard";
import StatsCard from "@/components/dashboard/StatsCard";
import StatsCardSkeleton from "@/components/dashboard/StatsCardSkeleton";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import { useGetDashboardStatsQuery } from "@/redux/api/DashboardApi";
import { formatIndianNumber } from "@/utils/Helpers";
import {ClipboardList,IndianRupee,PackagePlus,QrCode,ReceiptIndianRupee,ShoppingBag,Wallet,} from "lucide-react";
import React from "react";
import { MdOutlineDonutSmall } from "react-icons/md";

const page = () => {
  const { data, isLoading} = useGetDashboardStatsQuery();
  const statsdata = data?.data?.stats;

  const stats = [
    {
      title: "Today's Sales",
      value: `₹${statsdata?.todaySales ? formatIndianNumber(statsdata?.todaySales) : 0}` ,
      icon: IndianRupee,
      iconBg: "#DBEAFE",
      iconColor: "#2563EB",
      className: "lg:col-span-2",
    },
    {
      title: "Orders",
      value: statsdata?.todayOrders ? statsdata?.todayOrders : "--",
      icon: ShoppingBag,
      iconBg: "#FFF7ED",
      iconColor: "#EA580C",
    },
    {
      title: "Cash",
      value: `₹${statsdata?.todayCashOrders ? formatIndianNumber(statsdata?.todayCashOrders) : 0}`,
      icon: Wallet,
      iconBg: "#ECFDF5",
      iconColor: "#059669",
    },
    {
      title: "UPI",
      value: `₹${statsdata?.todayupiOrders ? formatIndianNumber(statsdata?.todayupiOrders) : 0}`,
      icon: QrCode,
      iconBg: "#EEF2FF",
      iconColor: "#4F46E5",
    },
  ];
  const actions = [
    {
      title: "Create New Bill",
      href: "/dashboard/billing/create",
      icon: ReceiptIndianRupee,
      primary: true,
    },
    {
      title: "Add Product",
      href: "/dashboard/products/create",
      icon: PackagePlus,
      iconColor: "#2563EB",
    },
    {
      title: "View Orders",
      href: "/dashboard/orders",
      icon: ClipboardList,
      iconColor: "#F97316",
    },
  ];

  return (
    <div className="flex flex-col p-5 space-y-6">
      {/* heading */}
      <WelcomeSection />
      {/* stats card */}
      <div className="flex flex-col ">
        <span className="flex items-center py-5 gap-5">
          <MdOutlineDonutSmall size={24} className="text-[#074FC8]" />
          <span className="text-[1.1rem] font-semibold">Aaj ka Snapshot</span>
        </span>
        {/* cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {isLoading ? (
            <>
            {[1,2,3,4,5].map((_,i)=>{
              return (
                <StatsCardSkeleton key={i} />
              )
            })}
            </>
          ) : (
            stats?.map((item) => {
              return <StatsCard key={item.title} stats={item} />;
            })
          )}
        </div>
      </div>
      {/* quick action card */}
      <div className="flex flex-col ">
        <span className="text-[1.1rem] py-5 font-semibold">Quick Actions</span>
        {/* cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions?.map((action) => {
            return <QuickactionCard key={action.title} actions={action} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
