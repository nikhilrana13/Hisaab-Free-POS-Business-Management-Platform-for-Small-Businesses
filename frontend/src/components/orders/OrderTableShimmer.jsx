import React from "react";

const OrderTableShimmer = () => {
    return (
        <div className="divide-y divide-[#f1f5f9]">
            {[1, 2, 3, 4, 5].map((_, index) => (
                <div
                    key={index}
                    className="grid grid-cols-[1.5fr_1fr_0.8fr_0.8fr_1fr_40px] items-center gap-4 px-6 py-5"
                >
                    {/* Order */}
                    <div className="flex items-center gap-3">
                        <div className="h-11 w-11 shrink-0 animate-pulse rounded-2xl bg-[#e2e8f0]" />

                        <div className="space-y-2">
                            <div className="h-4 w-24 animate-pulse rounded-md bg-[#e2e8f0]" />
                            <div className="h-3 w-16 animate-pulse rounded-md bg-[#f1f5f9]" />
                        </div>
                    </div>

                    {/* Items */}
                    <div className="space-y-2">
                        <div className="h-4 w-28 animate-pulse rounded-md bg-[#e2e8f0]" />
                        <div className="h-3 w-16 animate-pulse rounded-md bg-[#f1f5f9]" />
                    </div>

                    {/* Payment */}
                    <div className="h-7 w-16 animate-pulse rounded-full bg-[#e2e8f0]" />

                    {/* Total */}
                    <div className="h-5 w-20 animate-pulse rounded-md bg-[#e2e8f0]" />

                    {/* Date */}
                    <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-pulse rounded bg-[#f1f5f9]" />
                        <div className="h-4 w-24 animate-pulse rounded-md bg-[#e2e8f0]" />
                    </div>

                    {/* View */}
                    <div className="h-9 w-9 animate-pulse rounded-xl bg-[#f1f5f9]" />
                </div>
            ))}
        </div>
    );
};

export default OrderTableShimmer;