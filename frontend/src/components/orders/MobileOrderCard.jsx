import React from "react";
import {
    CalendarDays,
    ChevronRight,
    CreditCard,
    ShoppingBag,
} from "lucide-react";
import { FormatDate } from "@/utils/Helpers";

const OrderMobileCard = ({ order}) => {


    const paymentStyle = order?.paymentMethod === "upi" ? "bg-violet-50 text-violet-700 border-violet-100" : "bg-emerald-50 text-emerald-700 border-emerald-100";

    return (
        <div className="overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white shadow-sm transition hover:shadow-md">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#f1f5f9] p-4">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2FF] text-[#2563eb]">
                        <ShoppingBag size={19} />
                    </div>

                    <div className="min-w-0">
                        <p className="text-sm font-bold text-[#0f172a]">
                            #{order?._id?.slice(-6).toUpperCase()}
                        </p>

                        <p className="mt-0.5 text-xs text-[#94a3b8]">
                            {order?.products?.length || 0} product
                            {(order?.products?.length || 0) !== 1 ? "s" : ""}
                        </p>
                    </div>
                </div>

            </div>

            {/* Main Content */}
            <div className="space-y-4 p-4">
                {/* Product */}
                <div>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">
                        Items
                    </p>

                    <div className="rounded-2xl bg-[#f8fafc] px-3 py-3">
                        <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold capitalize text-[#334155]">
                                    {order?.products?.[0]?.productName || "N/A"}
                                </p>

                                {order?.products?.[0] && (
                                    <p className="mt-1 text-xs text-[#94a3b8]">
                                        {order.products[0].quantity} ×{" "}
                                        {order.products[0].priceOptionName}
                                    </p>
                                )}
                            </div>

                            {(order?.products?.length || 0) > 1 && (
                                <span className="shrink-0 rounded-full bg-[#EEF2FF] px-2.5 py-1 text-xs font-semibold text-[#2563eb]">
                                    +{order.products.length - 1} more
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Payment + Total */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-3">
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">
                            Payment
                        </p>

                        <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase ${paymentStyle}`}
                        >
                            <CreditCard size={12} />
                            {order?.paymentMethod || "N/A"}
                        </span>
                    </div>

                    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-3">
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">
                            Total
                        </p>

                        <p className="text-lg font-bold text-[#2563eb]">
                            ₹
                            {Number(order?.totalPrice || 0).toLocaleString(
                                "en-IN"
                            )}
                        </p>
                    </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs font-medium text-[#64748b]">
                    <CalendarDays
                        size={15}
                        className="text-[#94a3b8]"
                    />

                    <span>{FormatDate(order?.createdAt)}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderMobileCard;