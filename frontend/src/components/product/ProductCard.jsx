import { Minus, Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white shadow-sm transition hover:shadow-xl">
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
                <Image
                    src={product?.image?.url|| "/noimg.jpg" }
                    alt={product?.productName}
                    fill
                    className="object-cover"
                />
            </div>
            {/* Content */}
            <div className="space-y-5 p-5">
                <div>
                    <h3 className="text-xl font-bold capitalize text-[#0f172a]">
                        {product?.productName}
                    </h3>

                    <p className="mt-1 text-sm text-[#64748b]">
                        Select size and quantity
                    </p>
                </div>

                {/* Unit Selection */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-[#475569]">
                        Size
                    </label>

                    <select
                        className="h-11 w-full rounded-xl border border-[#e2e8f0] bg-white px-4 text-sm outline-none focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                    >
                        {product?.priceOptions?.map((item) => (
                            <option key={item._id} value={item.unit}>
                                {item.unit.toUpperCase()} • ₹{item.price}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Quantity */}
                <div className="flex items-center justify-between rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-2">
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e2e8f0] bg-white transition hover:bg-[#EEF2FF]">
                        <Minus size={18} />
                    </button>
                    <span className="text-xl font-bold text-[#0f172a]">
                        1
                    </span>
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb] text-white transition hover:bg-[#1d4ed8]">
                        <Plus size={18} />
                    </button>
                </div>
                {/* Price */}
                <div className="flex items-center justify-between rounded-xl bg-[#EEF2FF] px-4 py-3">
                    <span className="font-medium text-[#475569]">
                        Total
                    </span>
                    <span className="text-xl font-bold text-[#2563eb]">
                        ₹80
                    </span>
                </div>
                {/* Button */}
                <button className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#2563eb] font-semibold text-white transition hover:bg-[#1d4ed8]">
                    <ShoppingCart size={18} />
                    Add to Bill
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
