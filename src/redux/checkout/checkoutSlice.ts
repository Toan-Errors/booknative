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
  id_cart: any[];
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
  id_cart: [],
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

    addIdCart: (state, action: any) => {
      state.id_cart = action.payload;
      state.loading = false;
      state.error = null;
    },

    clearCheckout: (state) => {
      state.items = [];
      state.delivery_address = {} as DeliveryAddressType;
      state.total = 0;
      state.loading = false;
      state.error = null;
      state.success = null;
      state.shippings = [];
      state.shipping = {} as ShippingState;
      state.payments = [];
      state.payment = {} as PaymentState;
      state.id_cart = [];
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
  addIdCart,
  clearCheckout,
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

export const checkoutPayment = (data: any) => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.post("/order", data);
    if (response.data.message) {
      dispatch(hasError(response.data.message as any));
    } else {
      if (response.data) {
        const { items } = response.data;
        let id_cart: any[] = [];
        items.map((item: any) => {
          id_cart.push(item.id_cart);
        });
        dispatch(addIdCart(id_cart as any));
        dispatch(hasSuccess("Order placed successfully" as any));
      } else {
        dispatch(hasError("Something went wrong" as any));
      }
    }
  } catch (error) {
    dispatch(hasError("Something went wrong" as any));
  }
};
