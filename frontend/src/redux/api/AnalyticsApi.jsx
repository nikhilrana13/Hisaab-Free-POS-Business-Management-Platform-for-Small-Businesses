import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./BaseQuery";



export const AnalyticsApi = createApi({
    reducerPath:"Analytics",
    baseQuery:baseQueryWithAuth,
    endpoints:(builder)=>({
            // analytics overview
            GetAnalyticsOverview:builder.query({
                query:({range})=>`/api/analytics/overview?range=${range}`
            })
    })
})

export const {useGetAnalyticsOverviewQuery} = AnalyticsApi