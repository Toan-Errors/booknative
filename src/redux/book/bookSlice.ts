import { BookState } from "../../types/book/book-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

type initialStateType = {
  books: BookState[];
  book: BookState | null;
  loading: boolean;
  error: string | null;
};

const initialState: initialStateType = {
  books: [],
  book: null,
  loading: false,
  error: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    hasError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
    },
    getBooksSuccess: (state, action: PayloadAction<BookState[]>) => {
      state.books = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { startLoading, hasError, getBooksSuccess } = bookSlice.actions;
export const selectBooks = (state: any) => state.book.books;
export const selectBook = (state: any) => state.book.book;
export default bookSlice.reducer;

export const fetchBooks = () => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.get("/search/microservice");
    dispatch(getBooksSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};
