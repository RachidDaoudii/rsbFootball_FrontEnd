import { ApiSliceClub } from "../../api/club/apiSlice";

export const clubApi = ApiSliceClub.injectEndpoints({
  endpoints: (builder) => ({
    categories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
    category: builder.query({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
    }),
    player: builder.query({
      query: (id) => ({
        url: `/players/${id}`,
        method: "GET",
      }),
    }),
    staff: builder.query({
      query: (id) => ({
        url: `/staffs/${id}`,
        method: "GET",
      }),
    }),
    products: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCategoriesQuery,
  useCategoryQuery,
  usePlayerQuery,
  useStaffQuery,
  useProductsQuery
} = clubApi;
