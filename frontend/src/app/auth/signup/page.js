"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const page = () => {
   const [showPassword, setShowPassword] = useState(false);
  return (
        <section className="flex min-h-screen w-full">
      {/* Left Panel */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-[#F6F5ED] p-16 lg:flex">
        {/* Logo */}
        <Link
          href="/"
          className="absolute left-12 top-12 text-3xl font-bold tracking-tight text-[#2563eb]"
        >
          Hisaab
        </Link>

        <div className="flex max-w-[520px] flex-col items-center">
          <Image
            src="/signup.webp"
            alt="Signup Illustration"
            width={520}
            height={520}
            priority
            className="mb-10 h-auto w-full object-contain mix-blend-multiply"
          />

          <h2 className="text-center text-4xl font-extrabold uppercase tracking-tight text-[#2563eb]">
            START WITH CONFIDENCE.
          </h2>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex w-full items-center justify-center bg-white px-6 py-10 sm:px-10 lg:w-1/2">
        <div className="w-full max-w-[440px]">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="mb-10 inline-block text-3xl font-bold tracking-tight text-[#2563eb] lg:hidden"
          >
            Hisaab
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-[#0f172a]">
              Create Your Free Account
            </h1>

            <p className="text-[#475569]">
              Start managing your business in minutes.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Business Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                Business Name
              </label>

              <input
                type="text"
                placeholder="e.g. Acme Corp"
                className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[#0f172a] placeholder:text-[#94a3b8] shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                Mobile Number
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b]">
                  +91
                </span>

                <input
                  type="tel"
                  placeholder="98765 43210"
                  className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white pl-14 pr-4 text-[#0f172a] placeholder:text-[#94a3b8] shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 pr-12 text-[#0f172a] placeholder:text-[#94a3b8] shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b]"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded-xl bg-[#2563eb] font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8] active:scale-[0.99]"
            >
              Create Account
            </button>
          </form>
          {/* Terms */}
          <p className="mt-5 text-center text-sm leading-6 text-[#64748b]">
            By creating an account, you agree to our{" "}
            <Link
              href="/terms"
              className="font-medium text-[#2563eb] hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-medium text-[#2563eb] hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>

          {/* Divider */}
          <div className="relative my-8 flex items-center">
            <div className="flex-1 border-t border-[#e5e7eb]" />

            <span className="bg-white px-4 text-xs font-medium uppercase tracking-widest text-[#64748b]">
              OR
            </span>

            <div className="flex-1 border-t border-[#e5e7eb]" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-[#e5e7eb] bg-white font-medium text-[#0f172a] shadow-sm transition hover:bg-[#f8fafc]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.03 5.03 0 0 1-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09A6.6 6.6 0 0 1 5.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l4.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.92 10.92 0 0 0 12 1C7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
              />
            </svg>

            Continue with Google
          </button>

          {/* Login */}
          <div className="mt-10 text-center">
            <p className="text-[#64748b]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#2563eb] hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default page;
