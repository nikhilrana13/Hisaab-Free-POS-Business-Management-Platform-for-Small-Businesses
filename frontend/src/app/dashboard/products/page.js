"use client";
import ProductsTable from "@/components/product/ProductsTable";
import useDebounce from "@/hooks/useDebounce";
import { useGetProductsQuery } from "@/redux/api/ProductApi";
import { PackagePlus, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const { debounceValue } = useDebounce(searchInput, 500);
  const { data, isLoading, isError } = useGetProductsQuery({
    page,
    productname: debounceValue,
    limit: 5,
  });
  const products = data?.data?.products || [];
  const pagination = data?.data?.pagination || {};
  const productRef = useRef(null);

  // redirect to page 1 when search input changes
  useEffect(() => {
    setPage(1);
  }, [debounceValue]);
  // scroll to top of products when page changes
  useEffect(() => {
    productRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [page]);

  const start = pagination?.currentPage
    ? (pagination.currentPage - 1) * pagination.limit + 1
    : 0;
  const end = Math.min(
    pagination?.currentPage * pagination?.limit,
    pagination?.totalProducts,
  );

  return (
    <div className="flex flex-col p-5 space-y-6">
      {/* header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#2563eb]">
            Hisaab Products
          </span>
          <h2 className="mb-2 text-2xl font-semibold text-[#0f172a] sm:text-3xl lg:text-4xl">
            Manage Your Products
          </h2>
          <p className="text-sm leading-relaxed text-[#64748b] sm:text-base">
            Apne products add karein, prices update karein aur inventory ko
            organize rakhein taaki billing jaldi aur aasaan ho.
          </p>
        </div>
        {/* Create product dialog*/}
        <button className="flex h-12 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-6 font-semibold text-white transition hover:bg-[#1d4ed8]">
          <PackagePlus size={20} />
          Add Product
        </button>
      </div>
      {/* products */}
      <div ref={productRef} className="space-y-6  py-5">
        <div className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <h3 className="text-lg font-semibold">All Products</h3>
            {!isLoading && (
              <span className="text-sm text-[#64748b]">
                ({pagination.totalProducts} Products)
              </span>
            )}
          </div>
          <div className="relative w-full md:max-w-sm">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]"
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-white pl-11 pr-4 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
            />
          </div>
        </div>
        <div className="w-full bg-[#EEF2FF] rounded-xl p-2 overflow-hidden">
          <ProductsTable
            products={products}
            isLoading={isLoading}
            isError={isError}
          />
          {/* pagination */}
          {!isLoading && pagination?.totalPages > 1 && (
            <div className="w-full border-t border-[#bccbb9]/30 py-4 px-4 sm:px-6 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center">
              {/* Info */}
              <div className="text-center sm:text-left">
                <span className="text-[#5c5f60] text-xs sm:text-sm font-medium">
                  Showing {start || "0"} – {end || "0"} of{" "}
                  {pagination?.totalProducts || 0} Products
                </span>
              </div>
              {/* Controls */}
              <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
                {/* Prev */}
                <button
                  onClick={() => page > 1 && setPage((prev) => prev - 1)}
                  disabled={page === 1}
                  className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-lg font-medium 
                     border border-[#006e2f]/20 text-[#2563eb] bg-white cursor-pointer hover:bg-[#EEF2FF] disabled:opacity-40 transition"
                >
                  ←<span className="hidden sm:inline ml-1">Prev</span>
                </button>

                {/* Page Info */}
                <span className="text-[#3d4a3d] text-xs sm:text-sm font-semibold">
                  {pagination?.currentPage} / {pagination?.totalPages}
                </span>
                {/* Next */}
                <button
                  onClick={() =>
                    page < pagination?.totalPages && setPage((prev) => prev + 1)
                  }
                  disabled={page === pagination?.totalPages}
                  className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-lg font-medium 
                    bg-[#2563eb] cursor-pointer text-white shadow-sm hover:shadow-md hover:scale-[1.02] 
                    disabled:opacity-40 transition"
                >
                  <span className="hidden sm:inline mr-1">Next</span>→
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
