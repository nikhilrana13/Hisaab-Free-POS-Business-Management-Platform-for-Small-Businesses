import React from 'react';
import { useFormContext } from 'react-hook-form';

const BusinessContact = () => {
    const { register, formState: { errors } } = useFormContext()
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
                    {...register("businessAddress", {
                        required: "Business Address is required", minLength: {
                            value: 20,
                            message: "Address must be at least 20 characters",
                        }, maxLength: { value: 80, message: "Address must be between 20 and 80 characters" }
                    })}
                />
                {errors.businessAddress && (
                    <p className="mt-1 text-sm text-red-500">{errors.businessAddress.message}</p>
                )}
            </div>
            <div>
                <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                    Contact Number
                </label>
                <input
                    type="text"
                    placeholder="e.g. 9876543210"
                    className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[#0f172a] placeholder:text-[#94a3b8] shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                    {...register("contactno", { required: "Contact No is required", pattern: { value: /^[0-9]{10}$/, message: "Contact no should be 10 digits" } })}
                />
                {errors.contactno && (
                    <p className="mt-1 text-sm text-red-500">{errors.contactno.message}</p>
                )}

            </div>
        </div>
    );
}

export default BusinessContact;
