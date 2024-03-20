import { ApiSliceMarketplace } from "../../api/marketplace/apiSlice";

export const marketplaceApi = ApiSliceMarketplace.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
    addproducts: builder.mutation({
      query: (body) => ({
        url: `/products`,
        method: "POST",
        body
      }),
    }),
    deleteproduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
    updateproduct: builder.mutation({
      query: (body) => {
        const {id} = body;
        return {
          url: `/products/${id}`,
          method: "PATCH",
          body
        };
      },
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
    categories: builder.query({
      query: (id) => ({
        url: `/category-product`,
        method: "GET",
      }),
    }),
    addcategory: builder.mutation({
      query: (body) => ({
        url: `/category-product`,
        method: "POST",
        body,
      }),
    }),
    deletecategory: builder.mutation({
      query: (id) => ({
        url: `/category-product/${id}`,
        method: "DELETE",
      }),
    }),
    updatecategory: builder.mutation({
      query: (body) => {
        const {id} = body;
        return {
          url: `/category-product/${id}`,
          method: "PATCH",
          body
        };
      },
    }),
  }),
});

export const {
  useProductsQuery,
  useAddproductsMutation,
  useDeleteproductMutation,
  useUpdateproductMutation,
  useProductoneQuery,
  useOrdersQuery,
  useCategoriesQuery,
  useAddorderMutation,
  useAddcategoryMutation,
  useDeletecategoryMutation,
  useUpdatecategoryMutation,
  useDeliveredMutation
} = marketplaceApi;
