import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./book/bookSlice";
import AuthReducer from "./auth/authSlice";
import CartReducer from "./cart/cartSlice";
import CheckoutReducer from "./checkout/checkoutSlice";
import WishlistReducer from "./wishlist/wishlistSlice";
import OrderReducer from "./order/orderSlice";

export const store = configureStore({
  reducer: {
    book: BookReducer,
    auth: AuthReducer,
    cart: CartReducer,
    checkout: CheckoutReducer,
    wishlist: WishlistReducer,
    order: OrderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
