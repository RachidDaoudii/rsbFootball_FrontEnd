import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseQueryAuth = fetchBaseQuery({
  baseUrl: "http://localhost:4000/api/auth",
  prepareHeaders: (headers) => {
    return headers;
  },
  credentials: "include",
});

export const ApiSliceAuth = createApi({
  baseQuery: BaseQueryAuth,
  endpoints: (builder) => ({}),
});
