import { ReceiptIndianRupee } from "lucide-react";
import React from "react";
import { MdAddCircle } from "react-icons/md";

const page = () => {
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
            Products select karein, quantity update karein aur customer ke liye turant bill generate karein
          </p>
        </div>
      </div>
      {/* products */}
      
    </div>
  );
};

export default page;
