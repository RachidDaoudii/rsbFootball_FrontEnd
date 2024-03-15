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
    })
  }),
});

export const {
  useProductsQuery,
  useProductoneQuery
} = marketplaceApi;
