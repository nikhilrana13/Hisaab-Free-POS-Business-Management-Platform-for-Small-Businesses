"use client";
import Image from "next/image";
import { History, Rocket } from "lucide-react";

const RegisterToDigitalSection = () => {
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

        <div className="mx-auto max-w-5xl">
          {/* Hero Image */}
          <div className="mb-10 overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white shadow-xl">
            <Image
              src="/afterbefore.webp"
              alt="Before and After transformation of an Indian shopkeeper using Hisaab"
              width={1200}
              height={700}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          {/* Subtitle */}
          <div className="text-center">
            <p className="text-[18px] font-medium text-[#64748b] md:text-[20px]">
              Bas 10 minute mein apna business digital banana shuru karein.
            </p>
          </div>
          {/* Comparison */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Old */}
            <div className="flex items-start gap-4 rounded-2xl bg-[#f8fafc] p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ef4444]/10">
                <History size={20} className="text-[#ef4444]" />
              </div>
              <div>
                <h4 className="mb-2 text-[18px] font-semibold text-[#0f172a]">
                  Purana Tareeka
                </h4>
                <p className="text-[15px] leading-7 text-[#475569]">
                  Manual registers, calculation errors, and lost receipts that
                  cause daily stress and business loss.
                </p>
              </div>
            </div>
            {/* New */}
            <div className="flex items-start gap-4 rounded-2xl bg-[#f8fafc] p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#2563eb]/10">
                <Rocket size={20} className="text-[#2563eb]" />
              </div>
              <div>
                <h4 className="mb-2 text-[18px] font-semibold text-[#0f172a]">
                  Hisaab ka Naya Tareeka
                </h4>
                <p className="text-[15px] leading-7 text-[#475569]">
                  Digital billing, automated reports, and UPI tracking that
                  helps you grow your business with peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterToDigitalSection;