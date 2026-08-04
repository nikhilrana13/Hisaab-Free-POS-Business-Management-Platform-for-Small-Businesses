import React from "react";

const StatsCardSkeleton = ({ className = "" }) => {
  return (
    <div
      className={`animate-pulse rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${className}`}
    >
      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div className="h-4 w-24 rounded-full bg-[#E5E7EB]" />

        <div className="h-10 w-10 rounded-full bg-[#EEF2F7]" />
      </div>

      {/* Value */}
      <div className="h-9 w-32 rounded-lg bg-[#E5E7EB]" />
    </div>
  );
};

export default StatsCardSkeleton;