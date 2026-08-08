import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./BaseQuery";



export const ProductApi = createApi({
    reducerPath: "Product",
    baseQuery:baseQueryWithAuth,
    tagTypes:["Product"],
    endpoints:(builder)=>({
            // get all products
            GetProducts:builder.query({
                 query:({page,productname,limit})=>({
                    url:"/api/products/all",
                    params:{
                        page,
                        productname,
                        limit
                    }
                 }),
                ProvidesTags:["Product"]
            }),
            // add product 
            AddProduct:builder.mutation({
                query:(formdata)=>({
                    url:"/api/products/add-product",
                    method:"POST",
                    body:formdata
                }),
                invalidatesTags:["Product"]
            }),
            // update product
             UpdateProduct:builder.mutation({
                query:({formdata,id})=>({
                    url:`/api/products/update/${id}`,
                    method:"PUT",
                    body:formdata
                }),
                invalidatesTags:["Product"]
            }),
            // delete product 
            DeleteProduct:builder.mutation({
                query:(id)=>({
                    url:`/api/products/delete/${id}`,
                    method:"DELETE"
                }),
                invalidatesTags:["Product"]
            })
    })
})

export const {useGetProductsQuery,useAddProductMutation,useUpdateProductMutation,useDeleteProductMutation} = ProductApi