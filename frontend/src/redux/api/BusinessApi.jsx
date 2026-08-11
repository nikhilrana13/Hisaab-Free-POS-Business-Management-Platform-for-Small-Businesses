import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./BaseQuery";




export const BusinessApi = createApi({
    reducerPath:"Business",
    baseQuery:baseQueryWithAuth,
    tagTypes:["Business"],
    endpoints:(builder)=>({
            // get business details 
            GetBusinessDetails:builder.query({
                query:()=>"/api/user/business-details",
                providesTags:["Business"]
            }),
            // update business details 
            UpdateBusinessDetails:builder.mutation({
                query:(formdata)=>({
                    url:"/api/user/update-business",
                    method:"PUT",
                    body:formdata
                }),
                invalidatesTags:["Business"]
            })
    })
})

export const {useGetBusinessDetailsQuery,useUpdateBusinessDetailsMutation} = BusinessApi