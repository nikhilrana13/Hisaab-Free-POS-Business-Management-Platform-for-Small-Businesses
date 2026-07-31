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
                Roz ka hisaab likhne me bahut time lagta hai
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#ef4444]">•</span>
                  Udhaar ka record kho ya bhool jata hai
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#ef4444]">•</span>
                 Din ke profit ka pata nahi chalta
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 text-[#ef4444]">•</span>
                Register phat ya kho sakta hai
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
                 30 seconds me bill aur sale entry
              </li>

              <li className="flex items-start gap-2">
                <Check
                  size={18}
                  className="mt-1 shrink-0 text-[#2563eb]"
                />
              Udhaar aur payment ka automatic record
              </li>

              <li className="flex items-start gap-2">
                <Check
                  size={18}
                  className="mt-1 shrink-0 text-[#2563eb]"
                />
                  Roz ki kamai aur profit ek click me
              </li>

              <li className="flex items-start gap-2">
                <Check
                  size={18}
                  className="mt-1 shrink-0 text-[#2563eb]"
                />
               Mobile me hamesha safe digital hisaab
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;