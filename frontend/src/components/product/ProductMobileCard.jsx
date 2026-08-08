
import Image from 'next/image';
import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const ProductMobileCard = ({ product, onEdit, onDelete, isDeleting, deleteProductId }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white shadow-sm transition hover:shadow-md">
      <div className="flex gap-4 p-4">
        {/* Image */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#f8fafc]">
          <Image
            src={product?.image?.url || "/noimg.jpg"}
            alt={product?.productName}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="truncate text-lg font-semibold capitalize text-[#0f172a]">
              {product?.productName}
            </h3>

            <div className="flex items-center gap-2">
              <button onClick={() => onEdit(product)} className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#2563eb] transition hover:bg-[#dbeafe]">
                <MdEdit size={18} />
              </button>

              <button disabled={deleteProductId === product?._id || isDeleting} onClick={() => onDelete(product?._id)} className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-500 transition hover:bg-red-100">
                {deleteProductId === product?._id ? (
                  <div className="w-4 h-4 border-2 border-red-400 border-t-red-600 rounded-full animate-spin"></div>
                ) : (
                  <MdDelete />
                )
                }
              </button>
            </div>
          </div>

          {/* Units */}
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">
              Units
            </p>

            <div className="flex flex-wrap gap-2">
              {product?.priceOptions?.map((option) => (
                <span
                  key={option._id}
                  className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-medium text-[#2563eb]"
                >
                  {option.unit.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-4 rounded-2xl bg-[#f8fafc] p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">
              Pricing
            </p>

            <div className="space-y-2">
              {product?.priceOptions?.map((option) => (
                <div
                  key={option._id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="capitalize text-[#64748b]">
                    {option.unit}
                  </span>

                  <span className="font-semibold text-[#0f172a]">
                    ₹{option.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMobileCard;
