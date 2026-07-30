import React from 'react';
import {Coffee,Store,CookingPot,Shirt,Croissant,} from "lucide-react";

const TrustBySection = () => {
  return (
    <section className="border-y border-[#e5e7eb]/30 bg-white px-4 py-8 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-6 text-center text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-[#64748b]">
          Trusted by 10,000+ local businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-80 md:gap-12">
          <div className="flex items-center gap-2 font-medium text-[#475569]">
            <Coffee size={24} />
            <span>Tea Stalls</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-[#475569]">
            <Croissant size={24} />
            <span>Bakeries</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-[#475569]">
            <Store size={24} />
            <span>Kirana Stores</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-[#475569]">
            <CookingPot size={24} />
            <span>Restaurants</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-[#475569]">
            <Shirt size={24} />
            <span>Laundries</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustBySection;
