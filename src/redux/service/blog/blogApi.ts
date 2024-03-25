import { ApiSliceBlog } from "../../api/blog/apiSlice";

export const blogApi = ApiSliceBlog.injectEndpoints({
  endpoints: (builder) => ({
    blog: builder.query({
      query: () => ({
        url: "/post",
        method: "GET",
      }),
    }),
    addblog: builder.mutation({
      query: (body) => ({
        url: "post",
        method: "POST",
        body
      }),
    }),
    updateblog: builder.mutation({
      query: (body) => {
        const {id} = body;
        return {
          url: `/post/${id}`,
          method: "PATCH",
          body
        };
      },
    }),
    deleteblog : builder.mutation({
      query: (id) =>({
        url:`/post/${id}`,
        method: "DELETE"
      })
    }),
    getOnePost: builder.query({
      query: (id) => ({
        url: `/post/${id}`,
        method: "GET",
      }),
    }),
    addComment: builder.mutation({
      query: (body) => ({
        url: "comment",
        method: "POST",
        body
      }),
    }),
    categories:builder.query({
      query: () => ({
        url: `/category`,
        method: "GET",
      }),
    }),
    addcategory: builder.mutation({
      query: (body) => ({
        url: "category",
        method: "POST",
        body
      }),
    }),
    deletecategory: builder.mutation({
      query: (id) => ({
        url: `category/${id}`,
        method: "DELETE",
      }),
    }),
    updatecategory: builder.mutation({
      query: (body) => {
        const {id} = body;
        return {
          url: `/category/${id}`,
          method: "PATCH",
          body
        };
      },
    }),
    deletecomment: builder.mutation({
      query: (id) => ({
        url: `comment/${id}`,
        method: "DELETE",
      }),
    }),
    updatecomment: builder.mutation({
      query: (body) => {
        const {id} = body;
        return {
          url: `/comment/${id}`,
          method: "PATCH",
          body
        };
      },
    }),
  }),
});

export const {
  useBlogQuery,
  useGetOnePostQuery,
  useAddCommentMutation,
  useAddblogMutation,
  useUpdateblogMutation,
  useDeleteblogMutation,
  useCategoriesQuery,
  useAddcategoryMutation,useDeletecategoryMutation,useUpdatecategoryMutation,
  useDeletecommentMutation,
  useUpdatecommentMutation
} = blogApi;
