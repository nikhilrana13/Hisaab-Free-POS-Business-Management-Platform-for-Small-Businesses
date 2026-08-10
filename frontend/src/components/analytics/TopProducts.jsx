import React from "react";
import Link from "next/link";
import { formatIndianNumber } from "@/utils/Helpers";

const TopProducts = ({ products}) => {
  return (
    <div className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#0F172A]">
          Top Products
        </h3>
        <Link
          href="/dashboard/products"
          className="text-sm font-semibold text-[#2563EB] hover:underline"
        >
          View All
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <p className="text-sm font-medium text-[#64748B]">
              No product sales yet
            </p>

            <p className="mt-1 text-xs text-[#94A3B8]">
              Your best-selling products will appear here.
            </p>
          </div>
        ) : (
          products.slice(0, 5).map((product, index) => (
            <div
              key={product?._id || product?.productId || index}
              className="group flex items-center gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-[#E5E7EB] hover:bg-[#F8FAFC]"
            >
              {/* Rank */}
              <div className="w-6 shrink-0 text-center text-sm font-black text-[#94A3B8] transition-colors group-hover:text-[#2563EB]">
                {index + 1}
              </div>
              {/* Product Info */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-[#0F172A]">
                  {product?.productName || "Unknown Product"}
                </p>
                <p className="truncate text-xs text-[#64748B]">
                  {product?.quantitySold ?? 0} sold
                </p>
              </div>
                 {/* Revenue */}
              <div className="shrink-0 text-right">
                <p className="text-sm font-bold text-[#0F172A]">
                  ₹{formatIndianNumber(product?.revenue ?? 0)}
                </p>
                <p className="text-[10px] text-[#64748B]">
                  Revenue
                </p>
              </div>   
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopProducts;