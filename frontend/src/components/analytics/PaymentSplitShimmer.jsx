import React from "react";

const PaymentSplitShimmer = () => {
  return (
    <div className="w-full animate-pulse rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-6 space-y-2">
        <div className="h-5 w-32 rounded-md bg-[#E5E7EB]" />
        <div className="h-3 w-48 rounded-md bg-[#F1F5F9]" />
      </div>

      {/* Payment cards */}
      <div className="flex flex-col gap-4">
        {/* UPI */}
        <div className="flex items-center justify-between rounded-xl border border-[#F1F5F9] p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#E5E7EB]" />

            <div className="space-y-2">
              <div className="h-4 w-16 rounded bg-[#E5E7EB]" />
              <div className="h-3 w-20 rounded bg-[#F1F5F9]" />
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="h-4 w-10 rounded bg-[#E5E7EB]" />
            <div className="h-3 w-16 rounded bg-[#F1F5F9]" />
          </div>
        </div>

        {/* Cash */}
        <div className="flex items-center justify-between rounded-xl border border-[#F1F5F9] p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#E5E7EB]" />

            <div className="space-y-2">
              <div className="h-4 w-16 rounded bg-[#E5E7EB]" />
              <div className="h-3 w-20 rounded bg-[#F1F5F9]" />
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="h-4 w-10 rounded bg-[#E5E7EB]" />
            <div className="h-3 w-16 rounded bg-[#F1F5F9]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSplitShimmer;