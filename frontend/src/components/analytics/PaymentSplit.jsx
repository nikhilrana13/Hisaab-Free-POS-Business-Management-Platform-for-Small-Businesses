import React from "react";
import { QrCode, Wallet } from "lucide-react";
import { formatIndianNumber } from "@/utils/Helpers";

const PaymentSplit = ({ paymentSplit }) => {
  const upi = paymentSplit?.upi || {};
  const cash = paymentSplit?.cash || {};

  return (
    <div className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-[#0F172A]">
          Payment Split
        </h3>
        <p className="mt-1 text-sm text-[#64748B]">
          See how customers are paying.
        </p>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4">
        {/* UPI */}
        <div className="flex items-center justify-between rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] p-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
              <QrCode size={20} />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-[#0F172A]">
                UPI
              </p>
              <p className="text-xs text-[#64748B]">
                {upi?.orders ?? 0} Orders
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-[#2563EB]">
              {upi?.percentage ?? 0}%
            </p>
            <p className="text-sm text-[#64748B]">
              ₹{formatIndianNumber(upi?.sales ?? 0)}
            </p>
          </div>
        </div>
        {/* Cash */}
        <div className="flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-[#F3F3FE] p-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E2E8F0] text-[#64748B]">
              <Wallet size={20} />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-[#0F172A]">
                Cash
              </p>
              <p className="text-xs text-[#64748B]">
                {cash?.orders ?? 0} Orders
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-[#64748B]">
              {cash?.percentage ?? 0}%
            </p>
            <p className="text-sm text-[#64748B]">
              ₹{formatIndianNumber(cash?.sales ?? 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSplit;