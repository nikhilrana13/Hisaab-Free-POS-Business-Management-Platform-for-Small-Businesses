import { ShoppingCart } from "lucide-react";

const FloatingBillButton = ({totalItems,totalAmount,onClick}) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-30 left-4 right-4 z-50 lg:hidden"
    >
      <div className="flex items-center justify-between rounded-2xl bg-[#2563eb] px-5 py-4 text-white shadow-[0_12px_40px_rgba(37,99,235,0.35)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98]">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
            <ShoppingCart size={22} />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold">
              {totalItems} {totalItems > 1 ? "Items" : "Item"}
            </p>
            <p className="text-xs text-white/80">
              Tap to view bill
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="text-right">
          <p className="text-xs text-white/80">
            Total
          </p>

          <p className="text-2xl font-bold">
            ₹{totalAmount}
          </p>
        </div>
      </div>
    </button>
  );
};

export default FloatingBillButton;