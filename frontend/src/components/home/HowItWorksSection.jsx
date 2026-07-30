"use client";

const steps = [
  {
    number: "1",
    title: "Download App",
    description: "Sign up with your phone number in 30 seconds.",
    active: true,
  },
  {
    number: "2",
    title: "Add Items",
    description: "Scan barcode or create custom products easily.",
    active: false,
  },
  {
    number: "3",
    title: "Make Bill",
    description: "Add to cart and collect payment via UPI or Cash.",
    active: false,
  },
  {
    number: "4",
    title: "Track Growth",
    description: "Open dashboard anywhere to see daily sales.",
    active: false,
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="border-y border-[#e5e7eb]/50 bg-[#f8fafc] px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-[#0f172a] md:text-[40px]">
            Start billing in 4 simple steps
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Desktop Line */}
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-[2px] bg-[#e5e7eb] lg:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Circle */}
              <div
                className={`mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 bg-white text-[24px] font-bold shadow-sm transition-all duration-300 ${
                  step.active
                    ? "border-[#2563eb] text-[#2563eb]"
                    : "border-[#e5e7eb] text-[#64748b]"
                }`}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-[20px] font-semibold text-[#0f172a]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="max-w-[220px] text-[15px] leading-6 text-[#475569]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;