import React from "react";

const BusinessFormShimmer = () => {
    return (
        <div className="flex animate-pulse flex-col gap-8 rounded-md bg-white p-6 shadow-md md:flex-row md:items-start">
            {/* Logo Upload Shimmer */}
            <div className="shrink-0">
                {/* Label */}
                <div className="mb-3 h-4 w-28 rounded-md bg-[#e2e8f0]" />

                {/* Logo */}
                <div className="h-32 w-32 rounded-3xl border-2 border-dashed border-[#e5e7eb] bg-[#f1f5f9]" />
            </div>

            {/* Business Fields */}
            <div className="w-full flex-1 space-y-6">
                {/* Business Name */}
                <div className="space-y-2">
                    <div className="h-4 w-28 rounded-md bg-[#e2e8f0]" />

                    <div className="h-12 w-full rounded-xl bg-[#f1f5f9]" />
                </div>

                {/* Business Address */}
                <div className="space-y-2">
                    <div className="h-4 w-32 rounded-md bg-[#e2e8f0]" />

                    <div className="h-12 w-full rounded-xl bg-[#f1f5f9]" />
                </div>

                {/* Contact Number */}
                <div className="space-y-2">
                    <div className="h-4 w-32 rounded-md bg-[#e2e8f0]" />

                    <div className="h-12 w-full rounded-xl bg-[#f1f5f9]" />
                </div>

                {/* Button */}
                <div className="flex justify-end">
                    <div className="h-12 w-32 rounded-xl bg-[#e2e8f0]" />
                </div>
            </div>
        </div>
    );
};

export default BusinessFormShimmer;