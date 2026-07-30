import Image from "next/image";

const dayFlow = [
  {
    title: "Subah ki shuruaat bina tension.",
    description:
      "Shop kholte hi products ready. Billing shuru karne mein sirf kuch seconds lagenge.",
    image: "/day/morninghisaab.webp",
    alt: "Subah ki shuruaat",
  },
  {
    title: "Din bhar sale automatically save.",
    description:
      "Har bill automatically record hota rahe. Manual entry ya calculator ki zarurat nahi.",
    image: "/day/afternoonhisaab.webp",
    alt: "Din bhar har sale",
  },
  {
    title: "Business smoothly chalta rahe.",
    description:
      "Orders, products aur sales ek jagah manage karo. Har cheez organized rahe.",
    image: "/day/eveninghisaab.webp",
    alt: "Business smoothly",
  },
  {
    title: "Aaj ki kamai ek nazar mein.",
    description:
      "Shop band karte hi dekho: Total Sales, Total Orders, Best Selling Products, Payment Summary. Sab kuch automatically ready.",
    image: "/day/nighthisaab.webp",
    alt: "Aaj ki kamai",
  },
];

const BusinessDaySection = () => {
  return (
    <section className="border-t border-[#e5e7eb]/30 bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-[32px] font-bold tracking-tight text-[#0f172a] md:text-[40px]">
            Ek Din Hisaab Ke Saath
          </h2>

          <p className="text-[18px] text-[#475569]">
            Aapke business ka roz ka saathi.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {dayFlow.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] shadow-sm">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={500}
                  height={320}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div>
                <h3 className="mb-2 text-[18px] font-semibold text-[#0f172a]">
                  {item.title}
                </h3>

                <p className="text-[14px] leading-6 text-[#475569]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-[14px] italic text-[#475569] opacity-80">
            Hisaab sirf billing software nahi, aapke business ka roz ka saathi
            hai.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessDaySection;