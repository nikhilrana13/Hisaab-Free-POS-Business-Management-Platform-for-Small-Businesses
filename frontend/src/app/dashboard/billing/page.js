"use client"
import { ReceiptIndianRupee, Search } from "lucide-react";
import React, { useState } from "react";

const page = () => {
  const [selectProducts,setSelectedProducts] = useState([])
  

  return (
    <div className="flex flex-col p-5 space-y-6">
      {/* header */}
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#2563eb]">
            Hisaab Billing
          </span>
          <h2 className="mb-2 text-2xl font-semibold text-[#0f172a] sm:text-3xl lg:text-4xl">
            Create New Bill
          </h2>
          <p className="text-sm leading-relaxed text-[#64748b] sm:text-base">
            Products select karein, quantity update karein aur customer ke liye
            turant bill generate karein
          </p>
        </div>
        {/* search input */}
        <div className="relative w-full md:max-w-sm">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]"
          />
          <input
            type="text"
            placeholder="Search products..."
            className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-white pl-11 pr-4 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
          />
        </div>
      </div>
      {/* products */}
      <div className="space-y-6 border py-5">
        <h3 className="text-[1.1rem] font-semibold">All Products</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* product card */}
        
        </div>
      </div>
    </div>
  );
};

export default page;
