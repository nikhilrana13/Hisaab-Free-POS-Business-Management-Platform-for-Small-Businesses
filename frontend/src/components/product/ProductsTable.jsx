
import React from 'react';
import { MdEdit } from 'react-icons/md';
import ProductTableShimmer from './ProductTableShimmer';
import EmptyProductState from './EmptyProductState';
import ProductMobileCard from './ProductMobileCard';
import ProductMobileCardShimmer from './ProductMobileCardShimmer';
import Image from 'next/image';


const ProductsTable = ({ products, isLoading, isError }) => {

  return (
    <div className='w-full'>
      {/* Desktop Table */}
      <div className='hidden md:block overflow-x-auto'>
        <table className="w-full text-left border-collapse">
          {/* Header */}
          <thead>
            <tr className="text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              <th className="px-4 py-3">Product</th>
              <th className=" px-3 py-3">Units</th>
              <th className="px-3 py-3">Pricing</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          {isLoading ? (
            <tbody>
              <ProductTableShimmer />
            </tbody>
          ) : products?.length > 0 ? (
            <tbody>
              {products?.map((product) => {
                return (
                  <tr key={product?._id} className="rounded-md bg-white  hover:bg-gray-50 transition">
                    {/* Product */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className='overflow-hidden w-10 h-10 rounded-lg'>
                         <Image
                          src={product?.image?.url || "/noimg.jpg"}
                          alt={product?.productName}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{product?.productName || "NA"}</p>
                        </div>
                      </div>
                    </td>
                    {/* Units */}
                    <td className="px-3 py-3 text-sm">
                      {product?.priceOptions?.map(option => `${option.price}${option.unit}`).join(' , ') || 'N/A'}
                    </td>
                    {/* Pricing */}
                    <td className="px-3 py-3">
                      <div className="flex flex-col gap-1">
                        {product?.priceOptions?.map((option, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <span className="text-[#006e2f] font-semibold">
                              ₹{Number(option?.price).toLocaleString("en-IN")}
                            </span>
                            <span className="text-gray-500">
                              ({option.quantity}{option.unit})
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                    {/* Actions */}
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1 cursor-pointer hover:bg-gray-100 rounded">
                          <MdEdit />
                        </button>
                        {/* <button disabled={deleteprojectId === product?._id || isDeleting} onClick={() => handleDelete(product?._id)} className="p-1 hover:bg-red-100 text-red-500 rounded flex items-center justify-center">
                                                {deleteprojectId === product?._id ? (
                                                    <div className="w-4 h-4 border-2 border-red-400 border-t-red-600 rounded-full animate-spin"></div>
                                                ) : (
                                                    <MdDelete />
                                                )
                                                }

                                            </button> */}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          ) : isError ? (
            <tbody>
              <tr>
                <td colSpan="4" className="text-center py-4 text-red-500">
                  Error loading products. Please try again.
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="4">
                  <EmptyProductState />
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      {/* mobile table */}
      <div className='md:hidden space-y-3'>
        {
          isLoading ? (
            <div className='space-y-3'>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <ProductMobileCardShimmer key={i} />
              ))}
            </div>
          ) : products?.length > 0 ? (
            products?.map((product) => (
              <ProductMobileCard key={product?._id} product={product} />
            ))
          ) : isError ? (
            <p className="text-center py-4 text-red-500">
              Error loading products. Please try again.
            </p>
          ) : (
            <EmptyProductState />
          )}

      </div>
    </div>
  );
}

export default ProductsTable;
