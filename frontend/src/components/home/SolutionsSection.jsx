"use client";

import { Store, ShoppingBag, UtensilsCrossed } from "lucide-react";

const solutions = [
  {
    title: "Restaurants & Cafes",
    description:
      "Table management, KOT printing, modifiers, and quick Swiggy/Zomato reconciliation.",
    icon: UtensilsCrossed,
  },
  {
    title: "Kirana & Retail",
    description:
      "Thousands of pre-loaded FMCG barcodes, easy stock audits, and customer loyalty.",
    icon: Store,
  },
  {
    title: "Apparel & Boutiques",
    description:
      "Size/color variant management, return tracking, and thermal label printing.",
    icon: ShoppingBag,
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <h2 className="mb-12 text-center text-[32px] font-bold tracking-tight text-[#0f172a] md:text-[40px]">
          Har business ke liye perfect
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group cursor-pointer rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/50 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2563eb] shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-[20px] font-semibold text-[#0f172a]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] leading-7 text-[#475569]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;