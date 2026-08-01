import React from 'react';

const BusinessContact = () => {
  return (
      <div className="flex flex-col gap-6">
            <div>
                <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                     Business Address
                </label>
                <input
                    type="text"
                    placeholder="e.g. #123, Main Street, City"
                    className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[#0f172a] placeholder:text-[#94a3b8] shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                />
            </div>
            <div>
                <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                  Contact Number
                </label>
                <input
                    type="text"
                    placeholder="e.g. +91 9876543210"
                    className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[#0f172a] placeholder:text-[#94a3b8] shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                />
            </div>
        </div>
  );
}

export default BusinessContact;
