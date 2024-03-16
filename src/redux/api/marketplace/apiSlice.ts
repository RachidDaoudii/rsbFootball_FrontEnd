import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseQueryMarketplace = fetchBaseQuery({
  baseUrl: "http://localhost:4003/api/v1",
  prepareHeaders: (headers) => {
    return headers;
  },
  credentials: "include",
});

export const ApiSliceMarketplace = createApi({
  reducerPath: 'api4',
  baseQuery: BaseQueryMarketplace,
  endpoints: (builder) => ({}),
});
