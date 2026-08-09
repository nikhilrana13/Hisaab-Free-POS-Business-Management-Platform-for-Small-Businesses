import { ReceiptIndianRupee, ShoppingBag } from "lucide-react";
import React from "react";

const EmptyOrderState = () => {
    return (
        <div className="flex min-h-[320px] flex-col items-center justify-center px-6 py-12 text-center">
            {/* Icon */}
            <div className="relative mb-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#EEF2FF]">
                    <ShoppingBag
                        size={34}
                        strokeWidth={1.8}
                        className="text-[#2563eb]"
                    />
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-xl border-4 border-white bg-[#2563eb] text-white">
                    <ReceiptIndianRupee size={15} />
                </div>
            </div>

            {/* Content */}
            <div className="max-w-sm">
                <h3 className="text-xl font-bold text-[#0f172a]">
                    No orders yet
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748b]">
                    Abhi tak koi sale record nahi hai. Jab aap customer ke liye
                    sale save karenge, woh yahan dikhai degi.
                </p>
            </div>
        </div>
    );
};

export default EmptyOrderState;