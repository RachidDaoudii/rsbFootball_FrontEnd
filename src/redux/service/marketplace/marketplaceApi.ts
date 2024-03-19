import { ApiSliceMarketplace } from "../../api/marketplace/apiSlice";

export const marketplaceApi = ApiSliceMarketplace.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
    productone: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    orders: builder.query({
      query: (id) => ({
        url: `/orders`,
        method: "GET",
      }),
    }),
    addorder: builder.mutation({
      query: (body) => ({
        url: `/orders`,
        method: "POST",
        body,
      }),
    }),
    delivered: builder.mutation({
      query: (id) => ({
        url: `/orders/delivered/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useProductsQuery,
  useProductoneQuery,
  useOrdersQuery,
  useAddorderMutation,
  useDeliveredMutation
} = marketplaceApi;
