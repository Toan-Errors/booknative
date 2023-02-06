import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterType, UserState } from "../../types/auth/auth-type";
import axiosInstance from "../../utils/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

type initialStateType = {
  user: UserState | null;
  loading: boolean;
  error: string | null;
};

const initialState: initialStateType = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    hasError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
      state.user = null;
      AsyncStorage.removeItem("accessToken");
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      AsyncStorage.setItem("accessToken", action.payload.accessToken);
      state.error = null;
      state.loading = false;
    },
  },
});

export const { startLoading, hasError, loginSuccess } = authSlice.actions;
export const selectUser = (state: any) => state.auth.user;
export const selectAccessToken = (state: any) => state.auth.accessToken;
export default authSlice.reducer;

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch(startLoading());
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      if (response.data.user) {
        dispatch(loginSuccess(response.data));
      } else {
        if (response.data.message) {
          dispatch(hasError(response.data.message));
        } else {
          // dispatch(hasError("Something went wrong"));
        }
      }
    } catch (error) {
      // dispatch(hasError("Something went wrong"));
    }
  };

export const register = (data: RegisterType) => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.post("/auth/register", data);
    console.log(response);
    if (response.data.user) {
      dispatch(loginSuccess(response.data));
    } else {
      if (response.data.message) {
        dispatch(hasError(response.data.message));
      } else {
        // dispatch(hasError("Something went wrong"));
      }
    }
  } catch (error) {
    // dispatch(hasError("Something went wrong"));
  }
};

export const logout = () => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    dispatch(hasError(null));
  } catch (error) {
    console.log(error);
  }
};

export const authenticate = () => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const accessToken = await AsyncStorage.getItem("accessToken");
    if (accessToken === null) {
      console.log("No access token");
      return;
    }
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    const response = await axiosInstance.get("/auth/authenticate");
    if (response.data.user) {
      const user = response.data.user;
      dispatch(loginSuccess({ user, accessToken }));
    } else {
      delete axiosInstance.defaults.headers.common.Authorization;
      AsyncStorage.removeItem("accessToken");
      if (response.data.message) {
        console.log(response.data.message);
      } else {
        console.log("Something went wrong");
      }
    }
  } catch (error) {
    console.log(error);
    // dispatch(hasError("Something went wrong"));
  }
};
