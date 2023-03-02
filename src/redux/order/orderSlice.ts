import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderState } from "../../types/order/order-type";
import axiosInstance from "../../utils/axios";

type initialStateType = {
  orders: OrderState[];
  order: OrderState | null;
  loading: boolean;
  error: string | null;
};

const initialState: initialStateType = {
  orders: [],
  order: null,
  loading: false,
  error: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    hasError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setOrdersSuccess: (state, action: PayloadAction<OrderState[]>) => {
      state.orders = action.payload;
      state.loading = false;
      state.error = null;
    },
    setOrderSuccess: (state, action: PayloadAction<OrderState>) => {
      state.order = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { startLoading, hasError, setOrdersSuccess, setOrderSuccess } =
  orderSlice.actions;
export default orderSlice.reducer;

export const fetchOrders = () => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.get("/order");
    dispatch(setOrdersSuccess(response.data));
  } catch (error) {
    dispatch(hasError("Something went wrong"));
  }
};
