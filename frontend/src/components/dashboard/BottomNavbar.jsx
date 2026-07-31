import React from 'react';
import { BottomNavbarLinks, SidebarLinks } from './SidebarLinks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BottomNavbar = () => {
    const pathname = usePathname()
  return (
     <nav className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))]  left-1/2 z-50 w-[calc(100%-24px)] max-w-md -translate-x-1/2 rounded-3xl border border-[#E5E7EB] bg-white/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] lg:hidden">
      <div className="grid grid-cols-5 items-end px-1 sm:px-2 py-2">
        {BottomNavbarLinks.map((item) => {
          const Icon = item.icon;
          const active = item.href === "/dashboard"   ? pathname === item.href : pathname.startsWith(item.href);

          if (item.primary) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative -mt-8 flex flex-col items-center"
              >
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#2563eb] shadow-lg shadow-[#2563eb]/35 transition duration-300 active:scale-95">
                  <Icon
                    size={24}
                    className="text-white h-6 w-6 sm:h-7 sm:w-7"
                  />
                </div>

                <p className="mt-2 text-center whitespace-nowrap text-[10px] sm:text-[11px]  font-semibold text-[#2563eb]">
                  {item.label}
                </p>
              </Link>
            );
          }
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-center"
            >
              <div
                className={`flex flex-col min-w-0 items-center rounded-2xl px-2 py-2 transition-all duration-300
                ${
                  active
                    ? "bg-[#EEF4FF] text-[#2563eb] scale-105"
                    : "text-[#6B7280] hover:text-[#2563eb]"
                }`}
              >
                <Icon
                  size={22}
                />
                <span className="mt-1 whitespace-nowrap text-[10px] sm:text-[11px]  font-medium">
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNavbar;
