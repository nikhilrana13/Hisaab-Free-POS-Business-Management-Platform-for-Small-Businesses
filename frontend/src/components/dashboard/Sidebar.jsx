"use client"
import React from 'react';
import { LuLogOut } from 'react-icons/lu';
import { SidebarLinks } from './SidebarLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReceiptIndianRupee, Wallet } from 'lucide-react';
import useLogout from '@/hooks/useLogout';


const Sidebar = () => {
    const pathname = usePathname()
    const {handleLogout} = useLogout()
    return (
        <aside className='flex flex-col border border-r-[#c3c6d7] px-5 md:px-8 h-full shrink-0'>
            {/* logo */}
            <Link
                href="/dashboard"
                className="mb-4 flex items-center gap-3 px-4 py-6"
            >
                {/* Logo */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb] text-white shadow-sm">
                    <ReceiptIndianRupee size={20} />
                </div>
                {/* Brand */}
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-[#2563eb]">
                        Hisaab
                    </h1>
                    
                    <p className="text-sm font-normal text-[#64748b]">
                        Business Suite
                    </p>
                </div>
            </Link>
            <nav className="space-y-5">
                {SidebarLinks.map((item) => {
                    const Icon = item.icon;
                    if (item.href) {
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200
                                    ${pathname === item.href
                                        ? "bg-[#EEF2FF] text-[#074FC8]"
                                        : "text-[#434655] hover:bg-[#EEF2FF]"
                                    }`}>
                                <Icon size={25} />
                                <span className='font-semibold text-[0.8rem]'>{item.label}</span>
                            </Link>
                        );
                    }
                })}
            </nav>
            <div className="mt-auto border-t-2 border-t-[#c3c6d7]">
                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="flex w-full text-[0.8rem] font-semibold cursor-pointer my-2 rounded-md items-center  px-4 py-3 gap-3 text-[#434655] hover:bg-[#EEF2FF]">
                    <LuLogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;
