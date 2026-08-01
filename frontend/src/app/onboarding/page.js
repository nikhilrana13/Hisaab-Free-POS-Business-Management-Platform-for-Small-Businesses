"use client";
import ProgressBar from "@/components/onboarding/ProgressBar";
import WelcomeStep from "@/components/onboarding/WelcomeStep";
import {ReceiptIndianRupee,} from "lucide-react";
import NavigationsButtons from "@/components/onboarding/NavigationsButtons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BusinessDetails from "@/components/onboarding/BusinessDetails";
import BusinessContact from "@/components/onboarding/BusinessContact";

const page = () => {
  const [step, SetStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const next = () => {
    if (step < 2) {
      SetStep((prev) => prev + 1);
    }
  };
  const back = () => {
    if (step > 1) {
      SetStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Side */}
      <div className="relative hidden flex-1 overflow-hidden bg-[#f8fafc] lg:flex lg:items-center lg:justify-center p-12">
        {/* Background Blur */}
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-[#2563eb]/5 blur-3xl" />
        <div className="pointer-events-none absolute right-[-120px] top-1/4 h-[400px] w-[400px] rounded-full bg-[#dbeafe]/40 blur-3xl" />
        <div className="relative z-10 flex w-full max-w-[600px]  flex-col items-center text-center">
          {/* Logo */}
          <Link
            href="/"
            className="absolute left-0 top-0 flex items-center gap-2"
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
            </div>
          </Link>

          {/* Illustration */}
          <div className="mb-10 mt-15 aspect-[1.49] w-full overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white shadow-xl">
            <Image
              src="/onboarding.webp"
              alt="Shop owner using Hisaab"
              width={800}
              height={540}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-3 text-4xl font-bold text-[#0f172a]">
              Your business is under control.
            </h2>

            <p className="mx-auto max-w-md text-lg leading-8 text-[#64748b]">
              Join thousands of businesses managing their finances, inventory
              and billing seamlessly.
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center bg-white px-5 py-10 md:px-12">
        <div className="w-full max-w-[480px]">
          {/* Mobile Logo */}
          <Link href="/" className="mb-10 flex items-center gap-2 md:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563eb]">
              <ReceiptIndianRupee className="h-5 w-5 text-white" />
            </div>

            <span className="text-3xl font-bold text-[#2563eb]">Hisaab</span>
          </Link>
          {/* Card */}
          <div className="rounded-3xl border border-[#e5e7eb] bg-white p-6 md:p-8 shadow-lg">
            {/* Progress */}
            {step > 0 && (
              <>
                <ProgressBar step={step} />
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                  Step {step} of 2
                </p>
              </>
            )}
            {/* Heading */}
            {step === 0 && (
              <>
                <h1 className="mb-3 text-2xl md:text-4xl font-bold tracking-tight text-[#0f172a]">
                  Welcome to Hisaab
                </h1>

                <p className="mb-10 text-[1rem] text-[#64748b]">
                  Bas 2 minute me apni dukaan ka digital hisaab shuru karein.
                </p>
              </>
            )}
            {step === 1 && (
              <>
                <h1 className="mb-3 text-2xl md:text-4xl font-bold tracking-tight text-[#0f172a]">Business Details</h1>
                <p className="mb-10 text-[1rem] text-[#64748b]">Apni dukaan ki basic jankari add karein.</p>
              </>
            )}
            {step === 2 && (
              <>
                <h1 className="mb-3 text-2xl md:text-4xl font-bold tracking-tight text-[#0f172a]">Contact Details</h1>
                <p className="mb-10 text-[1rem] text-[#64748b]">Address aur mobile number add karein.</p>
              </>
            )}
            {/* Features */}
            <form className="space-y-6">
              {step === 0 && <WelcomeStep />}
              {step === 1 && <BusinessDetails />}
              {step === 2 && <BusinessContact />}
              {/* Buttons */}
              <NavigationsButtons
                step={step}
                back={back}
                next={next}
                loading={loading}
              />
            </form>
          </div>
          {/* Footer */}
          <p className="mx-auto mt-6 max-w-[460px] text-center text-sm text-[#64748b]">
            By proceeding, you agree to our{" "}
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
        </div>
      </div>
    </div>
  );
};

export default page;
