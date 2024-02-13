import { ApiAuthentification } from "../../api/service-authentification/apiAuthentification";
export const authApi = ApiAuthentification.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `/api/auth/login`,
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: `/api/auth/register`,
        method: "POST",
        body,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (body) => ({
        url: "/api/auth/verify-email",
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "api/auth/forgot-password",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation,useForgotPasswordMutation,useVerifyEmailMutation } =
  authApi;
