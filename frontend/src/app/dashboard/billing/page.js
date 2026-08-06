"use client";
import BillDrawer from "@/components/billing/BillDrawer";
import FloatingBillButton from "@/components/billing/FloatingBillButton";
import MobileBillDrawer from "@/components/billing/MobileBillDrawer";
import EmptyProductState from "@/components/product/EmptyProductState";
import ProductCard from "@/components/product/ProductCard";
import ProductCardShimmer from "@/components/product/ProductCardShimmer";
import useDebounce from "@/hooks/useDebounce";
import { useGetProductsQuery } from "@/redux/api/ProductApi";
import { PackagePlus, ReceiptIndianRupee, Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const { debounceValue } = useDebounce(searchInput, 500);
  const { data, isLoading, isError } = useGetProductsQuery({
    page,
    productname: debounceValue,
    limit: 4,
  });
  const products = data?.data?.products || [];
  const pagination = data?.data?.pagination || {};
  const productRef = useRef(null);
  const [isMobileBillOpen, setIsMobileBillOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const total = selectedProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);

 
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
    <>
      <div className="flex flex-col p-5 space-y-6">
        {/* header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#2563eb]">
              Hisaab Billing
            </span>
            <h2 className="mb-2 text-2xl font-semibold text-[#0f172a] sm:text-3xl lg:text-4xl">
              Create New Bill
            </h2>
            <p className="text-sm leading-relaxed text-[#64748b] sm:text-base">
              Products select karein, quantity update karein aur customer ke
              liye turant bill generate karein
            </p>
          </div>
          {/* search input */}
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
        {/* products */}
        <div ref={productRef} className="space-y-6  py-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">All Products</h3>
            {!isLoading && (
              <span className="text-sm text-[#64748b]">
                {pagination.totalProducts} Products
              </span>
            )}
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] ">
            <div className="space-y-6">
              {isLoading ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 4 }).map((_, i) => {
                    return <ProductCardShimmer key={i} />;
                  })}
                </div>
              ) : products?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {products?.map((product) => {
                      return (
                        <ProductCard
                          key={product?._id}
                          product={product}
                          selectedProducts={selectedProducts}
                          setSelectedProducts={setSelectedProducts}
                        />
                      );
                    })}
                  </div>
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
                          onClick={() =>
                            page > 1 && setPage((prev) => prev - 1)
                          }
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
                            page < pagination?.totalPages &&
                            setPage((prev) => prev + 1)
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
                </>
              ) : isError ? (
                <p className="text-red-500 text-center text-[1rem]">
                  Something went wrong while fetching products
                </p>
              ) : (
                <EmptyProductState />
              )}
            </div>
            {/* desktop drawer */}
            <BillDrawer selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
            {/* view bill float for mobile */}
            {selectedProducts.length > 0 && (
              <FloatingBillButton
                selectedProducts={selectedProducts}
                totalItems={selectedProducts?.length}
                totalAmount={total}
                onClick={() => setIsMobileBillOpen(true)}
              />
            )}
            <MobileBillDrawer open={isMobileBillOpen} onClose={() => setIsMobileBillOpen(false)} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
