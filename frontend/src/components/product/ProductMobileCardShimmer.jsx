import React from "react";

const ProductMobileCardShimmer = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white shadow-sm">
      <div className="flex gap-4 p-4">
        {/* Image */}
        <div className="h-20 w-20 shrink-0 rounded-2xl bg-slate-200" />

        {/* Details */}
        <div className="flex-1 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <div className="h-5 w-36 rounded bg-slate-200" />
              <div className="h-3 w-20 rounded bg-slate-100" />
            </div>

            <div className="flex gap-2">
              <div className="h-9 w-9 rounded-xl bg-slate-200" />
              <div className="h-9 w-9 rounded-xl bg-slate-200" />
            </div>
          </div>

          {/* Units */}
          <div>
            <div className="mb-2 h-3 w-14 rounded bg-slate-200" />

            <div className="flex gap-2">
              <div className="h-7 w-16 rounded-full bg-slate-200" />
              <div className="h-7 w-16 rounded-full bg-slate-200" />
            </div>
          </div>

          {/* Pricing */}
          <div className="rounded-2xl bg-[#f8fafc] p-3">
            <div className="mb-3 h-3 w-16 rounded bg-slate-200" />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-4 w-16 rounded bg-slate-200" />
                <div className="h-4 w-14 rounded bg-slate-200" />
              </div>

              <div className="flex items-center justify-between">
                <div className="h-4 w-16 rounded bg-slate-200" />
                <div className="h-4 w-14 rounded bg-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMobileCardShimmer;