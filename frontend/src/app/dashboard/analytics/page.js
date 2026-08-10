"use client";
import AnalyticsHeader from "@/components/analytics/AnalyticsHeader";
import { useGetAnalyticsOverviewQuery } from "@/redux/api/AnalyticsApi";
import { formatIndianNumber } from "@/utils/Helpers";
import { IndianRupee, ShoppingBag, Wallet } from "lucide-react";
import React, { useState } from "react";
import { TbGrowth } from "react-icons/tb";
import AnalyticsStatsCard from "../../../components/analytics/AnalyticsStatsCard";
import AnalyticsStatsShimmer from "@/components/analytics/AnalyticsStatsShimmer";
import RevenueOverviewShimmer from "@/components/analytics/RevenueOverviewShimmer";
import RevenueOverviewChart from "@/components/analytics/RevenueOverviewChart";
import PaymentSplit from "@/components/analytics/PaymentSplit";
import TopProducts from "@/components/analytics/TopProducts";
import PaymentSplitShimmer from "@/components/analytics/PaymentSplitShimmer";
import TopProductsShimmer from "@/components/analytics/TopProductsShimmer";

const page = () => {
  const [activeRange, setActiveRange] = useState("today");
  const { data, isLoading, isError } = useGetAnalyticsOverviewQuery({
    range: activeRange,
  },{refetchOnMountOrArgChange:true});
  const statsdata = data?.data?.stats || {};
  const monthlyRevenue = data?.data?.monthlyRevenue || [];
  const paymentSplit = data?.data?.paymentSplit || {};
  const topProducts = data?.data?.topProducts || [];
  const growth = Number(statsdata?.growth ?? 0);

  const stats = [
    {
      title: `${activeRange === "today" ? "Today's Sales" : activeRange === "week" ? "This Week's Sales" : "This Month's Sales" }`, 
      value: `₹${statsdata?.totalSales ? formatIndianNumber(statsdata?.totalSales) : 0}`,
      icon: IndianRupee,
      bg: "bg-[#DBEAFE]",
      color: "text-[#2563EB]",
    },
    {
      title: `${activeRange === "today" ? "Today's Orders" : activeRange === "week" ? "This Week's Orders" : "This Month's Orders" }`,
      value: statsdata?.totalOrders ? statsdata?.totalOrders : "--",
      icon: ShoppingBag,
      bg: "bg-[#FFF7ED]",
      color: "text-[#EA580C]",
    },
    {
      title: "Average Order Value",
      value: `₹${statsdata?.averageOrderValue ? formatIndianNumber(statsdata?.averageOrderValue) : 0}`,
      icon: Wallet,
      bg: "bg-[#ECFDF5]",
      color: "text-[#059669]",
    },
    {
      title: "Growth",
      value: `${growth > 0 ? "+" : ""}${growth}%`,
      icon: TbGrowth,
      bg:
        growth > 0
          ? "bg-[#DCFCE7]"
          : growth < 0
            ? "bg-[#FEE2E2]"
            : "bg-[#F1F5F9]",
      color:
        growth > 0
          ? "text-[#16A34A]"
          : growth < 0
            ? "text-[#DC2626]"
            : "text-[#64748B]",
    },
  ];
  return (
    <div className="flex flex-col p-5 space-y-6">
      {/* heading */}
      <AnalyticsHeader
        activeRange={activeRange}
        setActiveRange={setActiveRange}
      />
      <div className="flex flex-col space-y-6">
        {/* stats cards */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <AnalyticsStatsShimmer key={i} />
              ))}
          </div>
        ) : isError ? (
          <div className="col-span-full py-6 text-center text-sm text-red-500">
            Failed to load analytics stats
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {stats.map((stat, i) => (
              <AnalyticsStatsCard key={i} {...stat} />
            ))}
          </div>
        )}
        {/* revenue chart */}
        {isLoading ? (
          <RevenueOverviewShimmer />
        ) : isError ? (
          <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-500">
            Failed to load revenue data
          </div>
        ) : (
          <RevenueOverviewChart monthlyRevenue={monthlyRevenue} />
        )}
        {/* payment split and top products*/}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <PaymentSplitShimmer />
            <TopProductsShimmer />
          </div>
        ) : isError ? (
          <div className="col-span-full rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-500">
            Failed to load payment and product analytics
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <PaymentSplit paymentSplit={paymentSplit} />
            <TopProducts products={topProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
