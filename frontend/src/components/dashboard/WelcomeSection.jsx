"use client"
import { getGreeting } from '@/utils/Helpers';
import { PlusCircleIcon, Sparkles} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const WelcomeSection = () => {
  const user = useSelector((state)=>state.Auth.user)
  const greeting = getGreeting()

  return (
      <section className="relative overflow-hidden rounded-3xl bg-[#EEF2FF] backdrop-blur-2xl p-6 sm:p-8 lg:p-10">
      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-[#074FC8]" />
            <span className="text-sm font-medium text-[#074FC8]">
            {greeting.text} {greeting.emoji}
            </span>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl xl:text-5xl">
            Welcome back,
            <span className="ml-2 text-[#074FC8]">
              {user?.fullname || "User"}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-[#434655] sm:text-lg">
           Aaj ka hisaab yahin se shuru karein — sales dekhein, orders manage karein aur apne business par nazar rakhein.
          </p>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
         <Link href="/dashboard/billing" className="flex h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-[#2563eb] font-semibold text-white transition gap-3 px-8 py-2 hover:bg-[#1d4ed8]">
         <PlusCircleIcon size={20} />
         <span className='text-sm'> Create new Bill</span>
         </Link>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection
