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
    // addComment: builder.mutation({
    //   query: (body) => ({
    //     url: "comment",
    //     method: "POST",
    //     body
    //   }),
    // }),
  }),
});

export const {
  useCategoriesQuery,
  useCategoryQuery,
  // useAddCommentMutation,
} = clubApi;
