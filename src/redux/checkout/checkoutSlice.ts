import { createSlice } from "@reduxjs/toolkit";
import { DeliveryAddressType } from "../../types/auth/auth-type";
import { CartState } from "../../types/cart/cart-type";
import { PaymentState } from "../../types/order/payment-type";
import { ShippingState } from "../../types/order/shipping-type";
import axiosInstance from "../../utils/axios";

type initialStateType = {
  items: CartState[];
  delivery_address: DeliveryAddressType;
  total: number;
  loading: boolean;
  error: string | null;
  success: string | null;
  shippings: ShippingState[];
  shipping: ShippingState;
  payments: PaymentState[];
  payment: PaymentState;
};

const initialState: initialStateType = {
  items: [],
  delivery_address: {} as DeliveryAddressType,
  total: 0,
  loading: false,
  error: null,
  success: null,
  shippings: [],
  shipping: {} as ShippingState,
  payments: [],
  payment: {} as PaymentState,
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

    addShippingMethods: (state, action: any) => {
      state.shippings = action.payload;
      state.shipping = action.payload[0];
      state.loading = false;
      state.error = null;
    },

    selectShippingMethod: (state, action: any) => {
      state.shipping = action.payload;
      state.loading = false;
      state.error = null;
    },

    addPaymentMethods: (state, action: any) => {
      state.payments = action.payload;
      state.payment = action.payload[0];
      state.loading = false;
      state.error = null;
    },

    selectPaymentMethod: (state, action: any) => {
      state.payment = action.payload;
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
  addShippingMethods,
  selectShippingMethod,
  addPaymentMethods,
  selectPaymentMethod,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;

export const fetchShippingMethods = () => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.get("/order/shipping");
    dispatch(addShippingMethods(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchPaymentMethods = () => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.get("/order/payment");
    dispatch(addPaymentMethods(response.data));
  } catch (error) {
    console.log(error);
  }
};
