import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../types/cart/cart-type";
import axiosInstance from "../../utils/axios";

type initialStateType = {
  items: CartState[];
  totalQuantity: number;
  changed: boolean;
  loading: boolean;
  error: string | null;
  success: string | null;
};

const initialState: initialStateType = {
  items: [],
  totalQuantity: 0,
  changed: false,
  loading: false,
  error: null,
  success: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },

    hasError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
    },

    hasSuccess: (state, action: PayloadAction<any>) => {
      state.success = action.payload;
      state.loading = false;
    },

    replaceCart: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
      state.totalQuantity = action.payload.totalQuantity;
      state.loading = false;
      state.error = null;
    },

    addItemToCartSuccess: (state, action: PayloadAction<any>) => {
      // push new item to items array
      // if item already exists, update quantity
      const existingItem = state.items.find(
        (item) => item.bookId === action.payload.bookId
      );
      if (!existingItem) {
        state.items.push(action.payload);
      } else {
        existingItem.quantity = action.payload.quantity;
      }
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.changed = true;
      state.loading = false;
      state.error = null;
    },

    changeQuantitySuccess: (state, action: PayloadAction<any>) => {
      const existingItem = state.items.find(
        (item) => item.bookId === action.payload.bookId
      );
      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      }
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.changed = true;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  startLoading,
  hasError,
  hasSuccess,
  replaceCart,
  addItemToCartSuccess,
  changeQuantitySuccess,
} = cartSlice.actions;
export const selectCartItems = (state: any) => state.cart.items;
export const selectCartTotalQuantity = (state: any) => state.cart.totalQuantity;
export const selectCartChanged = (state: any) => state.cart.changed;
export default cartSlice.reducer;

export const getCart = () => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.get("/cart");
    if (response.data) {
      dispatch(replaceCart(response.data));
    } else {
      console.log("Không thể lấy giỏ hàng");
    }
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (item: CartItem) => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.post("/cart", item);
    if (response.data) {
      dispatch(addItemToCartSuccess(response.data));
      dispatch(hasSuccess("Thêm vào giỏ hàng thành công"));
    } else {
      dispatch(hasError("Không thể thêm vào giỏ hàng"));
    }
  } catch (error) {
    dispatch(hasError("Không thể thêm vào giỏ hàng"));
  }
};

export const changeQuantity =
  (id: string, type: string) => async (dispatch: any) => {
    try {
      dispatch(startLoading());
      // console.log(id, type);
      const response = await axiosInstance.post(`/cart/change-quantity`, {
        cartId: id,
        type,
      });
      if (response.data) {
        dispatch(changeQuantitySuccess(response.data));
      } else {
        dispatch(hasError("Không thể thay đổi số lượng"));
      }
    } catch (error) {
      console.log(error);
    }
  };
