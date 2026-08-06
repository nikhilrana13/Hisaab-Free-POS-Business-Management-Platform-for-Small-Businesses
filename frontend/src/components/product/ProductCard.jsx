import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product, selectedProducts, setSelectedProducts }) => {
    const isSelected = selectedProducts.some((item) => item.productId === product._id);
    // add product to bill
    const handleSelectProduct = () => {
        if (isSelected) return;
        const defaultPrice = product.priceOptions[0];
        if (!defaultPrice) return;
        setSelectedProducts((prev) => [
            ...prev,
            {
                productId: product._id,
                productName: product.productName,
                image: product.image,
                quantity: 1,
                selectedPriceOptionId: defaultPrice._id,
                unit: defaultPrice.unit,
                price: defaultPrice.price,
                priceOptions: product.priceOptions,
                isUnitLocked: false,
            },
        ]);
    }
    return (
        <div className="overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white shadow-sm transition hover:shadow-xl">
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
                <Image
                    src={product?.image?.url || "/noimg.jpg"}
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
                </div>
                {/* Button */}
                <button disabled={isSelected || !product.priceOptions?.length} onClick={handleSelectProduct} className={`flex h-12 w-full items-center justify-center gap-2 rounded-2xl font-semibold transition ${isSelected ? "cursor-not-allowed bg-[#94a3b8] text-white"
                    : "cursor-pointer bg-[#2563eb] text-white hover:bg-[#1d4ed8]"}`}>
                    <ShoppingCart size={18} />
                    {isSelected ? "Added to Bill" : "Add to Bill"}
                </button>

            </div>
        </div>
    );
}

export default ProductCard;
