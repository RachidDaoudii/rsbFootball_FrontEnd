import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseQueryClub = fetchBaseQuery({
  baseUrl: "http://localhost:4002/api/v1",
  prepareHeaders: (headers) => {
    return headers;
  },
  credentials: "include",
});

export const ApiSliceClub = createApi({
  reducerPath: 'api3',
  baseQuery: BaseQueryClub,
  endpoints: (builder) => ({}),
});
