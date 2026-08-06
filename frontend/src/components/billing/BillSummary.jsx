import React from 'react';
import { ChevronDown, Minus, Plus, ShoppingBag, Trash2, } from "lucide-react";
import Image from "next/image";

const BillSummary = ({ selectedProducts, setSelectedProducts }) => {
    const subtotal = selectedProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    const increaseQuantity = (productId) => {
        setSelectedProducts((prev) =>
            prev.map((item) =>
                item.productId === productId
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };
    const decreaseQuantity = (productId) => {
        setSelectedProducts((prev) =>
            prev.map((item) =>
                item.productId === productId
                    ? {
                        ...item,
                        quantity: Math.max(1, item.quantity - 1),
                    }
                    : item
            )
        );
    };
    const removeProduct = (productId) => {
        setSelectedProducts((prev) =>
            prev.filter((item) => item.productId !== productId)
        );
    };
    const handleUnitChange = (productId, selectedPriceOptionId) => {
        setSelectedProducts((prev) =>
            prev.map((item) => {
                if (item.productId !== productId) return item;

                const selectedOption = item.priceOptions.find(
                    (option) => option._id === selectedPriceOptionId
                );
                if (!selectedOption) return item;
                return {
                    ...item,
                    selectedPriceOptionId: selectedOption._id,
                    unit: selectedOption.unit,
                    price: selectedOption.price,
                    isUnitLocked: true,
                };
            })
        );
    };
    return (
        <div className="flex h-screen flex-col">
            {/* Header */}
            <div className="border-b border-[#e5e7eb] pb-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF2FF]">
                        <ShoppingBag className="h-5 w-5 text-[#2563eb]" />
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-[#0f172a]">
                            Current Bill
                        </h2>

                        <p className="text-sm text-[#64748b]">
                            {selectedProducts?.length} item(s)
                        </p>
                    </div>
                </div>
            </div>
            {/* Products */}
            <div className="mt-5 flex-1 space-y-4 overflow-y-auto pr-1">
                {selectedProducts?.map((item) => (
                    <div
                        key={item?.productId}
                        className="rounded-2xl border border-[#e5e7eb] bg-[#fafafa] p-4"
                    >
                        <div className="flex gap-3">
                            <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                                <Image
                                    src={item?.image.url}
                                    alt={item?.productName}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="font-semibold capitalize text-[#0f172a]">
                                            {item?.productName}
                                        </h3>

                                        <p className="mt-1 text-sm text-[#64748b]">
                                            ₹{item?.price} / {item?.unit}
                                        </p>
                                    </div>

                                    <button onClick={() => removeProduct(item?.productId)} className="rounded-lg p-2 text-[#dc2626] transition cursor-pointer hover:bg-red-50">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                {/* Unit */}
                                <div className="mt-4">
                                    <label className="mb-1 block text-xs font-medium text-[#64748b]">
                                        Size
                                    </label>
                                    <div className="relative">
                                        <select disabled={item?.isUnitLocked} value={item?.selectedPriceOptionId || ""}
                                            onChange={(e) => handleUnitChange(item?.productId, e.target.value)} className="h-10 w-full appearance-none rounded-xl border border-[#e2e8f0] bg-white px-3 text-sm outline-none focus:border-[#2563eb]">
                                            <option value="" disabled>
                                                Select Size
                                            </option>

                                            {item?.priceOptions?.map((option) => (
                                                <option key={option._id} value={option._id}>
                                                    {option.unit.toUpperCase()} • ₹{option.price}
                                                </option>
                                            ))}

                                        </select>
                                        <ChevronDown
                                            size={16}
                                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b]"
                                        />
                                    </div>
                                </div>
                                <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
                                    <p className="text-xs font-medium text-amber-700">
                                        💡 Size select hone ke baad lock ho jayegi. Agar badalni ho to product remove karke dobara add karein.
                                    </p>
                                </div>

                                {/* Quantity */}
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white p-1">
                                        <button onClick={() => decreaseQuantity(item?.productId)} className="flex h-8 w-8 items-center cursor-pointer justify-center rounded-lg hover:bg-[#EEF2FF]">
                                            <Minus size={16} />
                                        </button>
                                        <span className="min-w-[20px] text-center font-semibold">
                                            {item?.quantity}
                                        </span>
                                        <button onClick={() => increaseQuantity(item?.productId)} className="flex h-8 w-8 items-center cursor-pointer justify-center rounded-lg bg-[#2563eb] text-white">
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <span className="text-lg font-bold text-[#2563eb]">
                                        ₹{item.price * item.quantity}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-6 border-t border-[#e5e7eb] pt-5">
                <div className="mb-2 flex items-center justify-between text-[#64748b]">
                    <span>Subtotal</span>

                    <span>₹{subtotal}</span>
                </div>

                <div className="mb-5 flex items-center justify-between text-2xl font-bold text-[#0f172a]">
                    <span>Total</span>

                    <span className="text-[#2563eb]">
                        ₹{subtotal}
                    </span>
                </div>
                <button className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#2563eb] font-semibold text-white transition hover:bg-[#1d4ed8]">
                    Save Sale
                </button>
            </div>
        </div>
    );
}

export default BillSummary;
