"use client";

import {ArrowDown,ArrowRight,BookOpen,Calculator,Receipt,TriangleAlert,MonitorSmartphone,Zap,ChartColumn,TrendingUp,} from "lucide-react";

const oldWay = [
  {
    title: "Register",
    icon: BookOpen,
    color: "#64748b",
  },
  {
    title: "Calculator",
    icon: Calculator,
    color: "#64748b",
  },
  {
    title: "Manual Bills",
    icon: Receipt,
    color: "#64748b",
  },
  {
    title: "Confusion & Errors",
    icon: TriangleAlert,
    color: "#ef4444",
  },
];

const newWay = [
  {
    title: "Hisaab POS",
    icon: MonitorSmartphone,
  },
  {
    title: "Fast Billing",
    icon: Zap,
  },
  {
    title: "Daily Reports",
    icon: ChartColumn,
  },
  {
    title: "Better Business",
    icon: TrendingUp,
    primary: true,
  },
];

const RegisterToDigitalFlow = () => {
  return (
    <section className="border-y border-[#e5e7eb]/30 bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-[32px] font-bold tracking-tight text-[#0f172a] md:text-[40px]">
            Register se Digital Tak
          </h2>

          <p className="text-[18px] text-[#475569]">
            See the difference for yourself.
          </p>
        </div>

        {/* Comparison */}
        <div className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-8 md:flex-row md:gap-10">
          {/* Old Way */}
          <div className="flex flex-1 flex-col items-center rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] p-8 text-center opacity-80 grayscale-[20%]">
            <h3 className="mb-8 text-2xl font-semibold text-[#0f172a]">
              Purana tareeka
            </h3>

            <div className="flex w-full max-w-xs flex-col items-center gap-4">
              {oldWay.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex w-full flex-col items-center"
                  >
                    <div className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
                      <Icon
                        size={22}
                        style={{ color: item.color }}
                      />

                      <span
                        className={`font-medium ${
                          index === oldWay.length - 1
                            ? "text-[#ef4444]"
                            : "text-[#475569]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    {index !== oldWay.length - 1 && (
                      <ArrowDown
                        className="my-2 text-[#d1d5db]"
                        size={22}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Arrow */}
          <div className="hidden items-center justify-center md:flex">
            <div className="relative flex h-full items-center">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-[#d1d5db] to-transparent" />

              <div className="absolute left-1/2 -translate-x-1/2 rounded-full border border-[#e5e7eb] bg-white p-3 shadow-md">
                <ArrowRight
                  className="text-[#2563eb]"
                  size={28}
                />
              </div>
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="flex justify-center md:hidden">
            <div className="rounded-full border border-[#e5e7eb] bg-white p-3 shadow-md">
              <ArrowDown
                className="text-[#2563eb]"
                size={28}
              />
            </div>
          </div>

          {/* New Way */}
          <div className="relative flex flex-1 flex-col items-center overflow-hidden rounded-3xl border border-[#2563eb]/20 bg-[#2563eb]/5 p-8 text-center shadow-md">
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#2563eb]/10 blur-3xl" />

            <h3 className="relative z-10 mb-8 text-2xl font-bold text-[#2563eb]">
              Hisaab ka naya tareeka
            </h3>

            <div className="relative z-10 flex w-full max-w-xs flex-col items-center gap-4">
              {newWay.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex w-full flex-col items-center"
                  >
                    <div
                      className={`flex w-full items-center justify-center gap-3 rounded-xl border p-4 shadow-sm transition duration-300 hover:-translate-y-1 ${
                        item.primary
                          ? "border-[#2563eb] bg-[#2563eb] text-white shadow-md"
                          : "border-[#2563eb]/30 bg-white"
                      }`}
                    >
                      <Icon
                        size={22}
                        className={
                          item.primary
                            ? "text-white"
                            : "text-[#2563eb]"
                        }
                      />

                      <span
                        className={`font-semibold ${
                          item.primary
                            ? "text-white"
                            : "text-[#0f172a]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    {index !== newWay.length - 1 && (
                      <ArrowDown
                        className="my-2 text-[#2563eb]/50"
                        size={22}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-14 text-center">
          <p className="text-[20px] font-semibold tracking-tight text-[#0f172a] md:text-[24px]">
            Bas 10 minute mein apna business digital banana shuru karein.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterToDigitalFlow;