import {Check,X,ReceiptText,MonitorSmartphone,} from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-[32px] font-bold tracking-tight text-[#0f172a] md:text-[40px]">
            Purana tareeka chhodo
          </h2>

          <p className="text-[18px] text-[#475569]">
            Upgrade your dukan with smart digital tools.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Paper Register */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ef4444]/20 bg-[#ffdad6]/20 p-6">
            <ReceiptText
              size={120}
              className="absolute -right-4 -top-4 text-[#ef4444]/10"
            />

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#ef4444]/10">
              <X size={22} className="text-[#ef4444]" />
            </div>

            <h3 className="mb-5 text-2xl font-bold text-[#0f172a]">
              Paper Register
            </h3>

            <ul className="space-y-4 font-medium text-[#475569]">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#ef4444]">•</span>
                Kaccha bill and lost receipts
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#ef4444]">•</span>
                Daily calculation mistakes
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#ef4444]">•</span>
                Stock ka pata nahi
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#ef4444]">•</span>
                Udhaar track karna mushkil
              </li>
            </ul>
          </div>

          {/* Hisaab POS */}
          <div className="relative overflow-hidden rounded-3xl border border-[#2563eb]/20 bg-[#2563eb]/5 p-6 shadow-sm">
            <MonitorSmartphone
              size={120}
              className="absolute -right-4 -top-4 text-[#2563eb]/5"
            />

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]/10">
              <Check size={22} className="text-[#2563eb]" />
            </div>

            <h3 className="mb-5 text-2xl font-bold text-[#0f172a]">
              Hisaab POS
            </h3>

            <ul className="space-y-4 font-medium text-[#475569]">
              <li className="flex items-start gap-2">
                <Check
                  size={18}
                  className="mt-1 shrink-0 text-[#2563eb]"
                />
                Professional WhatsApp/Print bills
              </li>

              <li className="flex items-start gap-2">
                <Check
                  size={18}
                  className="mt-1 shrink-0 text-[#2563eb]"
                />
                100% accurate daily reports
              </li>

              <li className="flex items-start gap-2">
                <Check
                  size={18}
                  className="mt-1 shrink-0 text-[#2563eb]"
                />
                Auto inventory tracking
              </li>

              <li className="flex items-start gap-2">
                <Check
                  size={18}
                  className="mt-1 shrink-0 text-[#2563eb]"
                />
                One-click digital khata (ledger)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;