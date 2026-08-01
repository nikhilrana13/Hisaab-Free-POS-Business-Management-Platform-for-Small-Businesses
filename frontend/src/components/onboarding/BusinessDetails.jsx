import React from 'react';

const BusinessDetails = () => {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                    Business Name
                </label>
                <input
                    type="text"
                    placeholder="e.g. Best Bites"
                    className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[#0f172a] placeholder:text-[#94a3b8] shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                />
            </div>
            <div>
                <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                    Select Business Type
                </label>
               <select className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[#0f172a] placeholder:text-[#94a3b8] shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10">
                <option value="">Select Business Type</option>
                <option value="teastall">Tea Stall</option>
                <option value="foodcart">Food Cart</option>
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Cafe</option>
                <option value="bakery">Bakery</option>
                <option value="juiceshop">Juice Shop</option>
                <option value="fastfood">Fast Food</option>
                <option value="other">Other</option>
                </select>
            </div>
        </div>
    );
}

export default BusinessDetails;
