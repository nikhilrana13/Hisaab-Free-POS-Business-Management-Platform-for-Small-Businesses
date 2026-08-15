import { ArrowRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden px-4 md:px-8 pt-24 md:pt-37 pb-16 md:pb-24 bg-white">
            <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-[#f8fafc] px-4 py-2 shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span className="text-[0.75rem] font-semibold text-[#475569]">
                        Made for Indian Small Businesses
                    </span>
                </div>
                {/* Heading */}
                <h1 className="mb-6 max-w-4xl text-[2.5rem] font-bold leading-[1.1] tracking-tight text-[#0f172a] md:text-[56px]">
                    Business chalana mushkil hai.
                    <br className="hidden md:block" />
                    <span className="text-[#2563eb]"> Hisaab rakhna nahi.</span>
                </h1>
                {/* Description */}
                <p className="mb-10 max-w-2xl text-[1rem] leading-7 text-[#475569] md:text-[18px] md:leading-8">
                    Free cloud POS for Indian shops. 10 second mein bill ready.
                    Inventory, sales, aur khata manage karein seedha apne phone se.
                </p>

                {/* Buttons */}
                <div className="mb-16 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
                    <Link href={"/auth/signup"} className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-6 py-3 text-[16px] font-medium text-white shadow-md transition hover:bg-[#1d4ed8] active:scale-95 sm:w-auto">
                        Abhi Shuru kre
                        <ArrowRight size={20} />
                    </Link>

                    <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-6 py-3 text-[1rem] font-medium text-[#0f172a] shadow-sm transition hover:bg-[#f8fafc] active:scale-95 sm:w-auto">
                        <PlayCircle size={20} />
                        See how it works
                    </button>
                </div>
                {/* Hero Image */}
                <div className="relative w-full max-w-[1024px] overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white p-2 shadow-xl">
                    <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl bg-gradient-to-t from-black/5 to-transparent" />
                    <Image
                        src="/hero.webp"
                        alt="Friendly Indian shop owner using mobile POS"
                        width={1024}
                        height={640}
                        priority
                        className="h-auto w-full rounded-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
