import React from "react";

const WeatherCardShimmer = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#dbe5f5] bg-white shadow-sm">
      <div className="relative p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Location */}
            <div className="h-4 w-28 animate-pulse rounded-md bg-[#e2e8f0]" />

            {/* Heading */}
            <div className="mt-3 h-6 w-40 animate-pulse rounded-md bg-[#e2e8f0]" />

            {/* Subtitle */}
            <div className="mt-2 h-4 w-48 animate-pulse rounded-md bg-[#f1f5f9]" />

            {/* Summary */}
            <div className="mt-4 space-y-2">
              <div className="h-3.5 w-full max-w-xl animate-pulse rounded-md bg-[#f1f5f9]" />
              <div className="h-3.5 w-4/5 max-w-lg animate-pulse rounded-md bg-[#f1f5f9]" />
            </div>
          </div>

          {/* Weather Icon */}
          <div className="h-14 w-14 shrink-0 animate-pulse rounded-2xl bg-[#eef2ff]" />
        </div>

        {/* Temperature */}
        <div className="mt-7 flex items-end gap-3">
          <div className="h-14 w-28 animate-pulse rounded-xl bg-[#e2e8f0]" />

          <div className="mb-1 space-y-2">
            <div className="h-4 w-24 animate-pulse rounded-md bg-[#e2e8f0]" />
            <div className="h-3 w-28 animate-pulse rounded-md bg-[#f1f5f9]" />
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-[#eef2f7]" />

        {/* Metrics */}
        <div className="grid grid-cols-2 divide-x divide-[#eef2f7]">
          {/* Humidity */}
          <div className="px-3 first:pl-0">
            <div className="h-4 w-20 animate-pulse rounded-md bg-[#f1f5f9]" />
            <div className="mt-2 h-5 w-14 animate-pulse rounded-md bg-[#e2e8f0]" />
          </div>

          {/* Wind */}
          <div className="px-3">
            <div className="h-4 w-16 animate-pulse rounded-md bg-[#f1f5f9]" />
            <div className="mt-2 h-5 w-20 animate-pulse rounded-md bg-[#e2e8f0]" />
          </div>
        </div>

        {/* FlowPilot Badge */}
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#f8fafc] px-4 py-3">
          <div className="space-y-2">
            <div className="h-3.5 w-32 animate-pulse rounded-md bg-[#e2e8f0]" />
            <div className="h-3 w-24 animate-pulse rounded-md bg-[#f1f5f9]" />
          </div>

          <div className="h-6 w-14 animate-pulse rounded-full bg-[#dcfce7]" />
        </div>
      </div>
    </div>
  );
};

export default WeatherCardShimmer;