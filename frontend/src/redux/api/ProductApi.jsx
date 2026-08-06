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
                invalidatesTags:["Product"]
            })  
    })
})

export const {useGetProductsQuery} = ProductApi