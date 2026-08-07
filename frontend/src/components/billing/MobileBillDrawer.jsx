"use client";

import { X } from "lucide-react";
import BillSummary from "./BillSummary";

const MobileBillDrawer = ({open,onClose,selectedProducts,setSelectedProducts}) => {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-[2px] xl:hidden"
      />

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-[101] xl:hidden">
        <div className="max-h-[85vh] rounded-t-[32px] bg-white shadow-[0_-12px_40px_rgba(0,0,0,0.18)]">
          {/* Handle */}
          <div className="flex justify-center pt-3">
            <div className="h-1.5 w-14 rounded-full bg-[#d1d5db]" />
          </div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#e5e7eb] px-5 py-4">
            <div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Current Bill
              </h2>

              <p className="mt-1 text-sm text-[#64748b]">
                {selectedProducts.length}{" "}
                {selectedProducts.length === 1 ? "Item" : "Items"} Selected
              </p>
            </div>

            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f8fafc] transition hover:bg-[#EEF2FF]"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto px-5 py-5 max-h-[calc(85vh-90px)]">
            <BillSummary
              selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileBillDrawer;