import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Share2,
  Globe,
} from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Download App", href: "#" },
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Video Tutorials", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#e5e7eb] bg-[#f8fafc] pt-16 pb-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 lg:grid-cols-5 lg:px-8">
        {/* Brand */}
        <div className="col-span-2">
            <div>
            <Link href="/" className="mb-5 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Hisaab Logo"
              width={140}
              height={40}
              className="object-contain rounded-md"
            />
          </Link>
            </div>
          <p className="mb-6 max-w-xs text-[15px] leading-7 text-[#475569]">
            Empowering Indian businesses with smart, simple, and free
            point of sale software.
          </p>

          <div className="flex gap-4">
            <button className="rounded-lg p-2 text-[#64748b] transition hover:bg-white hover:text-[#2563eb]">
              <Share2 size={20} />
            </button>

            <button className="rounded-lg p-2 text-[#64748b] transition hover:bg-white hover:text-[#2563eb]">
              <Mail size={20} />
            </button>
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#0f172a]">
              {section.title}
            </h4>
            {section.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#475569] transition-colors duration-200 hover:text-[#2563eb]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-[#e5e7eb]/60 px-4 pt-6 text-center md:flex-row lg:px-8">
        <p className="text-[13px] text-[#64748b]">
          © 2026 Hisaab POS. Made in India.
        </p>

        <div className="flex items-center gap-2 text-[#64748b]">
          <Globe size={18} />
          <span className="text-[13px] font-medium">
            English (IN)
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;