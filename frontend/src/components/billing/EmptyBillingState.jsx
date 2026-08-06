import { ShoppingCart } from "lucide-react";

const EmptyBillState = () => {
    return (
        <div className="flex h-full min-h-[500px] flex-col items-center justify-center rounded-3xl border border-dashed border-[#dbeafe] bg-gradient-to-b from-white to-[#f8fbff] p-8 text-center">
            {/* Icon */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF2FF]">
                <ShoppingCart size={38} className="text-[#2563eb]" />
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-2xl font-bold text-[#0f172a]">
                Bill abhi khali hai
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-xs text-sm leading-7 text-[#64748b]">
                Left side se products select karein. Jaise hi product add karenge,
                yahan bill automatically banne lagega.
            </p>

            {/* Hint */}
            <div className="mt-8 rounded-2xl bg-[#EEF2FF] px-5 py-4">
                <p className="text-sm font-medium text-[#2563eb]">
                    👈 Pehle product select karein
                </p>
            </div>
        </div>
    );
};

export default EmptyBillState;