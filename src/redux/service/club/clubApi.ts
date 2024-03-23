import { ApiSliceClub } from "../../api/club/apiSlice";

export const clubApi = ApiSliceClub.injectEndpoints({
  endpoints: (builder) => ({
    categories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
    addcategory: builder.mutation({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body
      }),
    }),
    deletecategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
    }),
    updatecategory: builder.mutation({
      query: (body) => {
        const {id} = body;
        return {
          url: `/categories/${id}`,
          method: "PATCH",
          body
        };
      },
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
    addplayer: builder.mutation({
      query: (body) => ({
        url: "/players",
        method: "POST",
        body
      }),
    }),
    deleteplayer: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
    }),
    updateplayer: builder.mutation({
      query: (body) => {
        const {id} = body;
        return {
          url: `/players/${id}`,
          method: "PATCH",
          body
        };
      },
    }),
    players: builder.query({
      query: () => ({
        url: `/players`,
        method: "GET",
      }),
    }),
    staff: builder.query({
      query: (id) => ({
        url: `/staffs/${id}`,
        method: "GET",
      }),
    }),
    staffs: builder.query({
      query: (id) => ({
        url: `/staffs`,
        method: "GET",
      }),
    }),
    addstaff: builder.mutation({
      query: (body) => ({
        url: "/staffs",
        method: "POST",
        body
      }),
    }),
    deletestaff: builder.mutation({
      query: (id) => ({
        url: `/staffs/${id}`,
        method: "DELETE",
      }),
    }),
    updatestaff: builder.mutation({
      query: (body) => {
        const {id} = body;
        return {
          url: `/staffs/${id}`,
          method: "PATCH",
          body
        };
      },
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
  useAddcategoryMutation,
  useAddplayerMutation,
  useAddstaffMutation,
  useDeleteplayerMutation,
  useDeletestaffMutation,
  useUpdateplayerMutation,
  useUpdatestaffMutation,
  useDeletecategoryMutation,
  useUpdatecategoryMutation,
  usePlayerQuery,
  usePlayersQuery,
  useStaffQuery,
  useStaffsQuery,
  useProductsQuery
} = clubApi;
