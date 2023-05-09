import { BookSingleState, BookState } from "../../types/book/book-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

type initialStateType = {
  books: BookState[];
  allBooks: BookState[];
  book: BookSingleState | null;
  loading: boolean;
  error: string | null;
};

const initialState: initialStateType = {
  books: [],
  allBooks: [],
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
    getBookSuccess: (state, action: PayloadAction<BookSingleState>) => {
      state.book = action.payload;
      state.loading = false;
      state.error = null;
    },

    changeQuantity: (state, action: PayloadAction<BookSingleState>) => {
      state.book = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { startLoading, hasError, getBooksSuccess, getBookSuccess } =
  bookSlice.actions;
export const selectBooks = (state: any) => state.book.books;
export const selectBook = (state: any) => state.book.book;
export default bookSlice.reducer;

export const fetchBooks = () => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.get("/books");
    dispatch(getBooksSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchBook = (id: string) => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.get(`/books/${id}`);
    if (response.data) {
      dispatch(getBookSuccess(response.data));
    } else {
      dispatch(hasError("Book not found"));
    }
  } catch (error) {
    console.log(error);
  }
};
