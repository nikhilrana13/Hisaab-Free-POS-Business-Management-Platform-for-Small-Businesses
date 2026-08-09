import { FormatDate, GetPaymentStyle } from '@/utils/Helpers';
import { CalendarDays, ChevronRight, CreditCard, ShoppingBag } from 'lucide-react';
import React from 'react';
import OrderTableShimmer from './OrderTableShimmer';
import EmptyOrderState from './EmptyOrderState';
import OrderMobileCard from './MobileOrderCard';

const OrdersTable = ({ orders, isLoading, isError }) => {
    return (
        <div className="w-full">
            {/* Desktop */}
            <div className="hidden overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white shadow-sm md:block">
                {/* Table Header */}
                <div className="px-6 py-4">
                    <div className="grid grid-cols-[1.5fr_1fr_0.8fr_0.8fr_1fr_40px] items-center gap-4 text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                        <span>Order</span>
                        <span>Items</span>
                        <span>Payment</span>
                        <span>Total</span>
                        <span>Date</span>
                    </div>
                </div>
                {isLoading ? (
                    <OrderTableShimmer />
                ) : orders?.length > 0 ? (
                    <div className="divide-y divide-[#f1f5f9]">
                        {orders?.map((order) => (
                            <div
                                key={order?._id}
                                className="grid grid-cols-[1.5fr_1fr_0.8fr_0.8fr_1fr_40px] items-center gap-4 px-6 py-5 transition hover:bg-[#f8fafc]"
                            >
                                {/* Order */}
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2FF] text-[#2563eb]">
                                        <ShoppingBag size={19} />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-bold text-[#0f172a]">
                                            #{order?._id?.slice(-6).toUpperCase()}
                                        </p>

                                        <p className="mt-0.5 text-xs text-[#94a3b8]">
                                            {order?.products?.length || 0} product
                                            {(order?.products?.length || 0) !== 1 ? "s" : ""}
                                        </p>
                                    </div>
                                </div>

                                {/* Items */}
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-[#334155]">
                                        {order?.products?.[0]?.productName || "N/A"}
                                    </p>

                                    {(order?.products?.length || 0) > 1 && (
                                        <p className="mt-0.5 text-xs text-[#94a3b8]">
                                            +{order.products.length - 1} more
                                        </p>
                                    )}
                                </div>

                                {/* Payment */}
                                <div>
                                    <span
                                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold uppercase ${GetPaymentStyle(
                                            order?.paymentMethod
                                        )}`}
                                    >
                                        <CreditCard size={13} />
                                        {order?.paymentMethod || "N/A"}
                                    </span>
                                </div>

                                {/* Total */}
                                <div>
                                    <p className="text-base font-bold text-[#0f172a]">
                                        ₹{Number(order?.totalPrice || 0).toLocaleString("en-IN")}
                                    </p>
                                </div>

                                {/* Date */}
                                <div className="flex items-center gap-2 text-sm text-[#64748b]">
                                    <CalendarDays
                                        size={15}
                                        className="shrink-0 text-[#94a3b8]"
                                    />
                                    <span>{FormatDate(order?.createdAt)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : isError ? (
                    <div className="px-6 py-12 text-center text-sm font-medium text-red-500">
                        Error loading orders. Please try again.
                    </div>
                ) : (
                    <EmptyOrderState />
                )}
            </div>
            {/* Mobile */}
            <div className="space-y-3 md:hidden">
                {isLoading ? (
                    <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((_, index) => (
                            <OrderTableShimmer key={index} />
                        ))}
                    </div>
                ) : orders?.length > 0 ? (
                    orders.map((order) => (
                        <OrderMobileCard
                            key={order?._id}
                            order={order}
                        />
                    ))
                ) : isError ? (
                    <p className="py-6 text-center text-sm font-medium text-red-500">
                        Error loading orders. Please try again.
                    </p>
                ) : (
                    <EmptyOrderState />
                )}
            </div>
        </div>
    );
}

export default OrdersTable;

