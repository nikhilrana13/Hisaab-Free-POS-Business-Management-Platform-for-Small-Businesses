import React from "react";

const RevenueOverviewShimmer = () => {
  return (
    <div className="w-full animate-pulse rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          {/* Title */}
          <div className="h-5 w-36 rounded-md bg-[#E5E7EB] sm:w-44" />

          {/* Subtitle */}
          <div className="h-3 w-52 rounded-md bg-[#F1F5F9] sm:w-64" />
        </div>

        {/* Optional filter/action placeholder */}
        <div className="h-8 w-20 rounded-lg bg-[#F1F5F9]" />
      </div>

      {/* Chart */}
      <div className="relative h-[240px] w-full overflow-hidden sm:h-[300px] md:h-[340px]">
        {/* Y-axis skeleton */}
        <div className="absolute left-0 top-2 flex h-[85%] flex-col justify-between">
          <div className="h-3 w-8 rounded bg-[#F1F5F9]" />
          <div className="h-3 w-8 rounded bg-[#F1F5F9]" />
          <div className="h-3 w-8 rounded bg-[#F1F5F9]" />
          <div className="h-3 w-8 rounded bg-[#F1F5F9]" />
          <div className="h-3 w-8 rounded bg-[#F1F5F9]" />
        </div>

        {/* Chart area */}
        <div className="absolute bottom-8 left-12 right-2 top-2">
          {/* Horizontal grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-px w-full bg-[#F1F5F9]"
              />
            ))}
          </div>

          {/* Fake area */}
          <div className="absolute inset-x-0 bottom-0 h-[65%]">
            <svg
              viewBox="0 0 800 250"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M0 205 C70 180 110 190 165 155 C220 120 255 170 315 135 C370 100 405 125 465 95 C520 65 555 110 610 80 C670 50 720 70 800 35 L800 250 L0 250 Z"
                fill="#F1F5F9"
              />

              <path
                d="M0 205 C70 180 110 190 165 155 C220 120 255 170 315 135 C370 100 405 125 465 95 C520 65 555 110 610 80 C670 50 720 70 800 35"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-12 right-2 flex justify-between">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-3 w-8 rounded bg-[#F1F5F9]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueOverviewShimmer;