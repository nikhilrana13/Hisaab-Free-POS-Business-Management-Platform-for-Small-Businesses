"use client";

import {ReceiptText,CloudCheck,Smartphone,Package,BookOpen,BarChart3,} from "lucide-react";

const features = [
  {
    title: "Superfast Billing",
    description:
      "Scan barcode or tap screen. Bill ready in just 10 seconds. Send via WhatsApp or Print.",
    icon: ReceiptText,
    iconBg: "#eff6ff",
    iconColor: "#2563eb",
  },
  {
    title: "Cloud Backup",
    description:
      "Data kabhi loss nahi hoga. Automatically synced securely to the cloud in real-time.",
    icon: CloudCheck,
    iconBg: "#eef2ff",
    iconColor: "#4f46e5",
  },
  {
    title: "Mobile Friendly",
    description:
      "Use on your smartphone, tablet, or desktop. Dukan ka data humesha aapke jeb mein.",
    icon: Smartphone,
    iconBg: "#ecfdf5",
    iconColor: "#059669",
  },
  {
    title: "Smart Inventory",
    description:
      "Low stock alerts, batch expiry tracking, and easy inwarding. No more out-of-stock.",
    icon: Package,
    iconBg: "#fff7ed",
    iconColor: "#ea580c",
  },
  {
    title: "Digital Khata",
    description:
      "Track customer udhaar, send payment reminders, and receive payments seamlessly.",
    icon: BookOpen,
    iconBg: "#faf5ff",
    iconColor: "#9333ea",
  },
  {
    title: "Daily Reports",
    description:
      "Galla check karein kahin se bhi. Real-time profit/loss and sales analytics.",
    icon: BarChart3,
    iconBg: "#fdf2f8",
    iconColor: "#db2777",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-[#f8fafc] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-3 text-[32px] font-bold tracking-tight text-[#0f172a] md:text-[40px]">
            Sab kuch jo aapko chahiye
          </h2>

          <p className="text-[18px] text-[#475569]">
            Powerful features built simply for Indian small businesses.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: feature.iconBg,
                    color: feature.iconColor,
                  }}
                >
                  <Icon size={24} strokeWidth={2.2} />
                </div>

                <h3 className="mb-2 text-[20px] font-semibold text-[#0f172a]">
                  {feature.title}
                </h3>

                <p className="text-[15px] leading-7 text-[#475569]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;