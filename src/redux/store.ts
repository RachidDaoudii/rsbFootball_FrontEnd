import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./service/auth/authApi";
import { blogApi } from "./service/blog/blogApi";
import { clubApi } from "./service/club/clubApi";
import { marketplaceApi } from "./service/marketplace/marketplaceApi";
import cartSlice from './features/cart/cartSlice';
import authSlice from './features/auth/authSlice';
const store = configureStore({
  reducer: {
  [authApi.reducerPath]: authApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
  [clubApi.reducerPath]: clubApi.reducer,
  [marketplaceApi.reducerPath]: marketplaceApi.reducer,
  cart: cartSlice,
  auth:authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware).concat(blogApi.middleware).concat(clubApi.middleware).concat(marketplaceApi.middleware),
});

export default store;
