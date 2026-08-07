import React from "react";

const ProductTableShimmer = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <tr
          key={index}
          className="border-b border-[#e5e7eb] animate-pulse"
        >
          {/* Product */}
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-xl bg-slate-200" />

              <div className="space-y-2">
                <div className="h-4 w-40 rounded bg-slate-200" />
                <div className="h-3 w-24 rounded bg-slate-100" />
              </div>
            </div>
          </td>

          {/* Price */}
          <td className="px-6 py-4">
            <div className="space-y-2">
              <div className="h-3 w-16 rounded bg-slate-200" />
              <div className="h-3 w-20 rounded bg-slate-100" />
            </div>
          </td>

          {/* Created */}
          <td className="px-6 py-4">
            <div className="h-4 w-24 rounded bg-slate-200" />
          </td>

          {/* Updated */}
          <td className="px-6 py-4">
            <div className="h-4 w-24 rounded bg-slate-200" />
          </td>

          {/* Status */}
          <td className="px-6 py-4">
            <div className="h-8 w-20 rounded-full bg-slate-200" />
          </td>

          {/* Actions */}
          <td className="px-6 py-4">
            <div className="flex items-center justify-end gap-2">
              <div className="h-9 w-9 rounded-xl bg-slate-200" />
              <div className="h-9 w-9 rounded-xl bg-slate-200" />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductTableShimmer;