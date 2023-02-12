import { createSlice } from "@reduxjs/toolkit";
import { DeliveryAddressType } from "../../types/auth/auth-type";
import { CartState } from "../../types/cart/cart-type";

type initialStateType = {
  items: CartState[];
  delivery_address: DeliveryAddressType;
  total: number;
  loading: boolean;
  error: string | null;
  success: string | null;
};

const initialState: initialStateType = {
  items: [],
  delivery_address: {} as DeliveryAddressType,
  total: 0,
  loading: false,
  error: null,
  success: null,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },

    hasError: (state, action: any) => {
      state.error = action.payload;
      state.loading = false;
    },

    hasSuccess: (state, action: any) => {
      state.success = action.payload;
      state.loading = false;
    },

    addItemsToCheckout: (state, action: any) => {
      state.items = action.payload.items;
      state.total = action.payload.total;
      state.loading = false;
      state.error = null;
    },

    addDeliveryAddress: (state, action: any) => {
      state.delivery_address = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  startLoading,
  hasError,
  hasSuccess,
  addItemsToCheckout,
  addDeliveryAddress,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
