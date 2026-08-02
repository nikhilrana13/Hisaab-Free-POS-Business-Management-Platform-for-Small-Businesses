import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./BaseQuery";





export const OnBoardingApi = createApi({
    reducerPath:"OnBoarding",
    baseQuery:baseQueryWithAuth,
    tagTypes:["OnBoarding"],
    endpoints:(builder)=>({
        // add business details 
         AddBusinessDetails:builder.mutation({
            query:(formdata)=>({
                url:"/api/user/onboarding",
                method:"POST",
                body:formdata
            }),
            invalidatesTags:["OnBoarding"]
         })
    })
})

export const {useAddBusinessDetailsMutation} = OnBoardingApi