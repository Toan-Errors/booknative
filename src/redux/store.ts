import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./book/bookSlice";
import AuthReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    book: BookReducer,
    auth: AuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
