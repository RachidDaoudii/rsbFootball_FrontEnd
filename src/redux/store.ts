import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./service/auth/authApi";
import { blogApi } from "./service/blog/blogApi";
import { clubApi } from "./service/club/clubApi";

const store = configureStore({
  reducer: {
  [authApi.reducerPath]: authApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
  [clubApi.reducerPath]: clubApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware).concat(blogApi.middleware).concat(clubApi.middleware),
});

export default store;
