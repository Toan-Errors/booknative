import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishlistState } from "../../types/wishlist/wishlist-type";
import axiosInstance from "../../utils/axios";

type initialState = {
  wishlists: WishlistState[];
  wishlist: WishlistState | null;
  loading: boolean;
  error: string | null;
};

const initialState: initialState = {
  wishlists: [],
  wishlist: null,
  loading: false,
  error: null,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    hasError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
    },
    getWishlistsSuccess: (state, action: PayloadAction<WishlistState[]>) => {
      state.wishlists = action.payload;
      state.loading = false;
      state.error = null;
    },
    getWishlistByBookId: (state, action: PayloadAction<WishlistState>) => {
      const bookId = action.payload;
      const wishlist = state.wishlists.find(
        (wishlist) => wishlist.bookId === (bookId as any)
      );
      state.wishlist = wishlist ? wishlist : null;
      state.loading = false;
      state.error = null;
    },
    updateLike: (state, action: PayloadAction<WishlistState>) => {
      const payload = action.payload;
      const wishlistIndex = state.wishlists.findIndex(
        (wishlist) => wishlist.bookId === payload.bookId
      );
      if (wishlistIndex >= 0) {
        // delete wishlist
        state.wishlists.splice(wishlistIndex, 1);
        state.wishlist = null;
      } else {
        state.wishlists.push(payload);
        state.wishlist = payload;
      }
    },
  },
});

export const {
  startLoading,
  hasError,
  getWishlistsSuccess,
  getWishlistByBookId,
  updateLike,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;

export const fetchWishlists = () => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.get("/wishlist/user");
    // console.log(response.data);
    dispatch(getWishlistsSuccess(response.data));
  } catch (error) {
    dispatch(hasError("Something went wrong!"));
  }
};

export const wishlistLike = (bookId: string) => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.post("/wishlist", { bookId });
    dispatch(updateLike(response.data));
  } catch (error) {
    dispatch(hasError("Something went wrong!"));
  }
};
