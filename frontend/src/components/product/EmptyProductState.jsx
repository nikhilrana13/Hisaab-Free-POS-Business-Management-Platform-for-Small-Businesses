import { PackagePlus } from 'lucide-react';
import React from 'react';

const EmptyProductState = () => {
  return (
     <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-[#dbeafe] bg-[#fcfdff] px-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF2FF]">
              <PackagePlus size={38} className="text-[#2563eb]" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-[#0f172a]">
              Abhi koi product nahi hai
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#64748b]">
              Billing shuru karne ke liye pehle apni dukaan ke products add
              karein.
            </p>
          </div>
  );
}

export default EmptyProductState;
