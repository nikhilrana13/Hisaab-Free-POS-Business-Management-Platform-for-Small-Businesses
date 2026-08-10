"use client";

import React, { useState } from "react";

const AnalyticsHeader = ({activeRange,setActiveRange}) => {
  const ranges = ["Today", "Week", "Month"];

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      {/* Header */}
      <div>
         <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#2563eb]">
            Hisaab Analytics
          </span>
        <h2 className="mb-1 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
        Today's Business
        </h2>
        <p className="text-sm text-[#64748B] sm:text-base">
          See how your Business is doing today.
        </p>
      </div>
      {/* Date Range */}
      <div className="flex w-full overflow-x-auto rounded-xl border border-[#E5E7EB] bg-[#F1F1FC] p-2 shadow-sm md:w-auto">
        {ranges.map((range) => {
          const active = activeRange === range.toLowerCase();
          return (
            <button
              key={range}
              type="button"
              onClick={() => setActiveRange(range.toLowerCase())}
              className={`flex-1 cursor-pointer whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 md:flex-none md:px-5 ${
                active
                  ? "bg-white text-[#2563EB] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
              }`}
            >
              {range}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AnalyticsHeader;