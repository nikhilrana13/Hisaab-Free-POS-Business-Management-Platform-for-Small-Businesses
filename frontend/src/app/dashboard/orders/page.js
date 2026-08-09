"use client";
import OrdersTable from "@/components/orders/OrdersTable";
import { useGetAllOrdersQuery } from "@/redux/api/OrderApi";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const [range, setRange] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetAllOrdersQuery({
    page,
    range: range,
    paymentMethod: paymentMethod,
    limit: 5,
  });
  const orders = data?.data.Orders || [];
  const pagination = data?.data?.pagination || [];
  const OrdersRef = useRef()

  // redirect to page 1 when range and paymentmethod changes
  useEffect(() => {
    setPage(1);
  }, [range, paymentMethod])
   // scroll to top of products when page changes
  useEffect(()=>{
     OrdersRef.current.scrollIntoView({
       behavior: "smooth",
       block: "start",
     })
  },[page])

  const start = pagination?.currentPage
    ? (pagination.currentPage - 1) * pagination.limit + 1
    : 0;
  const end = Math.min(
    pagination?.currentPage * pagination?.limit,
    pagination?.totalOrders,
  );

  return (
    <div className="flex flex-col p-5 space-y-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        {/* Heading */}
        <div>
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#2563eb]">
            Hisaab Sales
          </span>

          <h2 className="text-2xl font-semibold text-[#0f172a] sm:text-3xl">
            Sales & Orders
          </h2>

          <p className="mt-1 text-sm text-[#64748b] sm:text-base">
            Apni sales dekhein, recent orders track karein aur payment details
            manage karein.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 sm:items-end">
          {/* Time Filter */}
          <div className="flex w-full rounded-xl border border-[#e2e8f0] bg-white p-1 sm:w-auto">
            {["All","Today", "Week", "Month"].map((filter) => (
              <button
                key={filter}
                onClick={() => setRange(filter.toLowerCase())}
                className={`flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold  transition   
                  ${range === filter.toLowerCase() ? "bg-[#EEF2FF] text-[#2563eb]" : "text-[#64748b]"}   sm:flex-none`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Payment Filter */}
          <div className="flex w-full cursor-pointer rounded-xl border border-[#e2e8f0] bg-white p-1 sm:w-auto">
            {["All", "Cash", "UPI"].map((method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method.toLowerCase())}
                className={`flex-1 rounded-lg px-4 cursor-pointer py-2 text-sm font-semibold  transition ${paymentMethod === method.toLowerCase() ? "bg-[#EEF2FF] text-[#2563eb]" : "text-[#64748b]"}  sm:flex-none`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* order tables */}
      <div ref={OrdersRef} className="space-y-6  py-5">
        <div className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <h3 className="text-lg font-semibold">All Orders</h3>
            {!isLoading && (
              <span className="text-sm text-[#64748b]">
                ({pagination.totalOrders} Products)
              </span>
            )}
          </div>
        </div>
        <div className="w-full bg-[#EEF2FF] rounded-xl p-2 overflow-hidden">
          <OrdersTable orders={orders} isLoading={isLoading} isError={isError} />
          {/* pagination */}
          {!isLoading && pagination?.totalPages > 1 && (
            <div className="w-full border-t border-[#bccbb9]/30 py-4 px-4 sm:px-6 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center">
              {/* Info */}
              <div className="text-center sm:text-left">
                <span className="text-[#5c5f60] text-xs sm:text-sm font-medium">
                  Showing {start || "0"} – {end || "0"} of{" "}
                  {pagination?.totalOrders || 0} Orders
                </span>
              </div>
              {/* Controls */}
              <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
                {/* Prev */}
                <button
                  onClick={() => page > 1 && setPage((prev) => prev - 1)}
                  disabled={page === 1}
                  className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-lg font-medium 
                     border border-[#006e2f]/20 text-[#2563eb] bg-white cursor-pointer hover:bg-[#EEF2FF] disabled:opacity-40 transition"
                >
                  ←<span className="hidden sm:inline ml-1">Prev</span>
                </button>

                {/* Page Info */}
                <span className="text-[#3d4a3d] text-xs sm:text-sm font-semibold">
                  {pagination?.currentPage} / {pagination?.totalPages}
                </span>
                {/* Next */}
                <button
                  onClick={() =>
                    page < pagination?.totalPages && setPage((prev) => prev + 1)
                  }
                  disabled={page === pagination?.totalPages}
                  className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-lg font-medium 
                    bg-[#2563eb] cursor-pointer text-white shadow-sm hover:shadow-md hover:scale-[1.02] 
                    disabled:opacity-40 transition"
                >
                  <span className="hidden sm:inline mr-1">Next</span>→
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
