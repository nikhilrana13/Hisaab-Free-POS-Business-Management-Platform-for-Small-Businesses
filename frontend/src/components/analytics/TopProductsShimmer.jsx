import React from "react";

const TopProductsShimmer = () => {
  return (
    <div className="w-full animate-pulse rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-5 w-32 rounded-md bg-[#E5E7EB]" />
          <div className="h-3 w-40 rounded-md bg-[#F1F5F9]" />
        </div>

        <div className="h-4 w-16 rounded bg-[#E5E7EB]" />
      </div>

      {/* Products */}
      <div className="flex flex-col gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl p-2"
          >
            {/* Rank */}
            <div className="h-4 w-5 rounded bg-[#F1F5F9]" />

            {/* Icon */}
            <div className="h-11 w-11 shrink-0 rounded-xl bg-[#E5E7EB]" />

            {/* Product */}
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-4 w-28 rounded bg-[#E5E7EB]" />
              <div className="h-3 w-16 rounded bg-[#F1F5F9]" />
            </div>

            {/* Revenue */}
            <div className="flex flex-col items-end gap-2">
              <div className="h-4 w-16 rounded bg-[#E5E7EB]" />
              <div className="h-3 w-12 rounded bg-[#F1F5F9]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProductsShimmer;