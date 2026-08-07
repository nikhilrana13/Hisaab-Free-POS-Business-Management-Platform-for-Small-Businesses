import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./BaseQuery";



export const OrderApi = createApi({
    reducerPath:"Order",
    baseQuery:baseQueryWithAuth,
    tagTypes:["Order"],
    endpoints:(builder)=>({
            // create order 
            CreateOrder:builder.mutation({
                query:(payload)=>({
                    url:"/api/orders/create",
                    method:"POST",
                    body:payload
                }),
                invalidatesTags:["Order"]
            })
    })
})

export const {useCreateOrderMutation} = OrderApi