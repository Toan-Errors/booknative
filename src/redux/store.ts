import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./book/bookSlice";
import AuthReducer from "./auth/authSlice";
import CartReducer from "./cart/cartSlice";
import CheckoutReducer from "./checkout/checkoutSlice";

export const store = configureStore({
  reducer: {
    book: BookReducer,
    auth: AuthReducer,
    cart: CartReducer,
    checkout: CheckoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
