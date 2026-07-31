import { Store, ShoppingBag, UtensilsCrossed } from "lucide-react";

const solutions = [
 {
    title: "Sabzi & Fruit Vendors",
    description:
      "Fast billing, digital khata, daily income reports, aur stock tracking se apna roz ka hisaab aasani se manage karein.",
    icon: Store,
  },
  {
    title: "Chai, Juice & Food Stalls",
    description:
      "Rush hours me bhi 10-second billing, customer payments aur daily sales ka complete record rakhein.",
    icon: UtensilsCrossed,
  },
  {
    title: "Kirana & Small Shops",
    description:
      "Inventory tracking, customer udhaar management aur daily profit reports ke saath business ko digitally manage karein.",
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