import { Banknote, Smartphone } from "lucide-react";
import React from "react";

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-[#0f172a]">
        Payment Method
      </label>

      <div className="grid grid-cols-2 mt-3 gap-3">
        {/* Cash */}
        <button
          type="button"
          onClick={() => setPaymentMethod("cash")}
          className={`flex h-14 items-center cursor-pointer justify-center gap-2 rounded-2xl border font-semibold transition-all ${
            paymentMethod === "cash"
              ? "border-[#2563eb] bg-[#EEF2FF] text-[#2563eb]"
              : "border-[#e5e7eb] bg-white text-[#475569] hover:border-[#2563eb]/40"
          }`}
        >
          <Banknote size={20} />
          Cash
        </button>

        {/* UPI */}
        <button
          type="button"
          onClick={() => setPaymentMethod("upi")}
          className={`flex h-14 items-center cursor-pointer justify-center gap-2 rounded-2xl border font-semibold transition-all ${
            paymentMethod === "upi"
              ? "border-[#2563eb] bg-[#EEF2FF] text-[#2563eb]"
              : "border-[#e5e7eb] bg-white text-[#475569] hover:border-[#2563eb]/40"
          }`}
        >
          <Smartphone size={20} />
          UPI
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;