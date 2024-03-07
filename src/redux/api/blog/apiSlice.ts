import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseQueryBlog = fetchBaseQuery({
  baseUrl: "http://localhost:4001/api/v1",
  prepareHeaders: (headers) => {
    return headers;
  },
  credentials: "include",
});

export const ApiSliceBlog = createApi({
  reducerPath: 'api2',
  baseQuery: BaseQueryBlog,
  endpoints: (builder) => ({}),
});
