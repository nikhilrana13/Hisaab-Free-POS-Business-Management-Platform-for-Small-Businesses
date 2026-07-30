"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosCloseCircleOutline, IoMdMenu } from 'react-icons/io';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className="fixed top-0 z-100 w-full bg-[#ffffff/90] shadow-sm transition-all duration-200 backdrop-blur-xl">
                <div className="flex items-center justify-between h-16 mx-auto px-3 md:px-8 max-w-[1200px]">
                    {/* logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Hisaab Logo"
                            width={140}
                            height={50}
                            className="rounded-md object-contain"
                        />
                    </div>
                    {/* nav links */}
                    <div className="hidden md:flex items-center gap-6">
                        <a className="text-[0.9rem] text-[#475569] hover:text-[#2563eb] transition-colors duration-200" href="#features">Features</a>
                        <a className="text-[0.9rem]  text-[#475569] hover:text-[#2563eb] transition-colors duration-200" href="#how-it-works">How it Works</a>
                        <a className="text-[0.9rem]  text-[#475569] hover:text-[#2563eb] transition-colors duration-200" href="#pricing">Pricing</a>
                        <a className="text-[0.9rem]  text-[#475569] hover:text-[#2563eb] transition-colors duration-200" href="#faq">FAQ</a>
                    </div>
                    {/* buttons */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/auth/login" className="transition-transform md:inline-flex text-[14px] font-medium text-[#0f172a] hover:text-[#2563eb]">Log In</Link>
                        <Link href="" className="inline-flex items-center justify-center bg-[#2563eb] text-white text-[0.9rem] font-medium px-4 py-2 rounded-lg hover:bg-[#2563eb/90]  shadow-sm active:scale-95 transition-transform">
                            Get Started Free
                        </Link>
                    </div>
                    <button onClick={() => setOpen(true)} className='md:hidden flex p-2 rounded-md text-[#0f192a] hover:text-[#2563eb]'>
                        <IoMdMenu size={24} />
                    </button>
                </div>
            </nav>
            {/* mobile menu  */}
            <div className={`lg:hidden transition-transform ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'} duration-300 fixed inset-0 bg-[#121315]/70 backdrop-blur-md flex items-center justify-center flex-col gap-8 z-999`}>
                <div className="flex items-center gap-8 flex-col active:scale-95">
                    <a onClick={()=>setOpen(false)} className="text-[0.9rem] text-white hover:text-[#2563eb] transition-colors duration-200" href="#features">Features</a>
                    <a onClick={()=>setOpen(false)} className="text-[0.9rem]  text-white hover:text-[#2563eb] transition-colors duration-200" href="#how-it-works">How it Works</a>
                    <a onClick={()=>setOpen(false)} className="text-[0.9rem]  text-white hover:text-[#2563eb] transition-colors duration-200" href="#pricing">Pricing</a>
                    <a onClick={()=>setOpen(false)} className="text-[0.9rem]  text-white hover:text-[#2563eb] transition-colors duration-200" href="#faq">FAQ</a>
                    <Link
                        href="/auth/login"
                        className="rounded-lg text-[0.9rem] text-white transition-colors hover:text-[#2563eb] active:scale-95"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/auth/signup"
                        className="rounded-lg text-[0.9rem]  text-white transition-colors hover:text-[#2563eb] active:scale-95 "
                    >
                        Get Started
                    </Link>
                </div>
                <button onClick={() => setOpen(false)} className='p-2 rounded-md text-[#ffffff]'>
                    <IoIosCloseCircleOutline size={24} />
                </button>
            </div>
        </>
    );
}

export default Navbar;
