import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const WeatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://flowpilot-backend-7xir.onrender.com",
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ latitude, longitude }) => ({
        url: "/api/webhooks/wf_GwqE94DqIw",
        method: "POST",
        body: {
          latitude,
          longitude,
        },
      }),
      // store data in cache for 5 min
      keepUnusedDataFor: 300,
    }),
  }),
});

export const {useGetWeatherQuery,} = WeatherApi;