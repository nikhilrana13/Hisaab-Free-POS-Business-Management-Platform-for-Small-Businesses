import {ReceiptText,CloudCheck,Smartphone,Package,BookOpen,BarChart3,} from "lucide-react";

const features = [
   {
    title: "Fast Billing",
    description:
      "10 seconds me bill banao. Touch-friendly screen se bina kisi technical knowledge ke billing karo.",
    icon: ReceiptText,
    iconBg: "#eff6ff",
    iconColor: "#2563eb",
  },
  {
    title: "Digital Khata",
    description:
      "Customer ka udhaar aur payment automatically save karo. Kisi bhi customer ka hisaab ek click me dekho.",
    icon: BookOpen,
    iconBg: "#faf5ff",
    iconColor: "#9333ea",
  },
  {
    title: "Daily Income Report",
    description:
      "Roz kitni sale hui aur kitna paisa kamaya, sab ek screen par. Register calculate karne ki zarurat nahi.",
    icon: BarChart3,
    iconBg: "#fdf2f8",
    iconColor: "#db2777",
  },
  {
    title: "Inventory Tracking",
    description:
      "Kitna stock bacha hai aur kaunsa product khatam hone wala hai, Hisaab automatically track karta hai.",
    icon: Package,
    iconBg: "#fff7ed",
    iconColor: "#ea580c",
  },
  {
    title: "Works Everywhere",
    description:
      "Mobile, tablet ya laptop se apni shop ka hisaab kabhi bhi aur kahin bhi manage karo.",
    icon: Smartphone,
    iconBg: "#ecfdf5",
    iconColor: "#059669",
  },
  {
    title: "Safe Cloud Backup",
    description:
      "Phone kharab ya change ho jaye tab bhi aapka pura business data cloud me securely safe rahega.",
    icon: CloudCheck,
    iconBg: "#eef2ff",
    iconColor: "#4f46e5",
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