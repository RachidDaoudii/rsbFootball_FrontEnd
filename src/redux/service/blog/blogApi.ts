import { ApiSliceBlog } from "../../api/blog/apiSlice";

export const blogApi = ApiSliceBlog.injectEndpoints({
  endpoints: (builder) => ({
    blog: builder.query({
      query: () => ({
        url: "/post",
        method: "GET",
      }),
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
  }),
});
console.log("ApiSliceBlog:", ApiSliceBlog); // Check ApiSliceBlog
console.log("Endpoints:", blogApi.endpoints); // Check if endpoints are defined
console.log("Definitions:", blogApi.definitions); // Check the definitions object
export const {
  useBlogQuery,
  useGetOnePostQuery,
  useAddCommentMutation,
} = blogApi;
