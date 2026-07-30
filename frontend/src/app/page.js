import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import BusinessDaySection from '@/components/home/BusinessDaySection';
import ComparisonSection from '@/components/home/ComparisonSection';
import FAQSection from '@/components/home/FaqSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import RegisterToDigitalFlow from '@/components/home/RegisterToDigitalFlow';
import RegisterToDigitalSection from '@/components/home/RegisterToDigitalSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import TrustBySection from '@/components/home/TrustBySection';
import React from 'react';

const page = () => {
  return (
    <div className='bg-[#ffffff] text-[#0f172a]  antialiased min-h-screen flex flex-col selection:bg-primary-[#2563eb] selection:text-white'>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBySection />
        <ComparisonSection />
        <BusinessDaySection />
        <FeaturesSection />
        <SolutionsSection />
        <HowItWorksSection />
        <RegisterToDigitalSection />
        <RegisterToDigitalFlow />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default page;
