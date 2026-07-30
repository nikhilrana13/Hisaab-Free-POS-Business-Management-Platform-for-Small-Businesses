"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Hisaab really free?",
    answer:
      "Yes, the core POS, billing, and inventory features are 100% free forever. We only charge for advanced enterprise features like multi-store sync and custom API integrations.",
  },
  {
    question: "Internet nahi hua toh bill banega?",
    answer:
      "Yes! Hisaab works offline. Jab internet wapas aayega, all your data will automatically sync to the cloud safely.",
  },
  {
    question: "Mera data safe hai?",
    answer:
      "100% safe. We use bank-level encryption. Aapka data sirf aapka hai, we never sell your data to third parties.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="mx-auto mb-24 max-w-3xl bg-white px-4 py-16 md:px-8 md:py-24"
    >
      {/* Heading */}
      <h2 className="mb-12 text-center text-[32px] font-bold tracking-tight text-[#0f172a] md:text-[40px]">
        Frequently Asked Questions
      </h2>

      {/* FAQ */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              openIndex === index
                ? "border-[#2563eb]/30 bg-[#f8fafc]"
                : "border-[#e5e7eb] bg-white"
            }`}
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
              className="flex w-full items-center justify-between p-5 text-left"
            >
              <span className="text-[16px] font-semibold text-[#0f172a]">
                {faq.question}
              </span>

              <ChevronDown
                size={20}
                className={`text-[#64748b] transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openIndex === index
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] leading-7 text-[#475569]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;