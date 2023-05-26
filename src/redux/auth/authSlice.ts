import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DeliveryAddressType,
  RegisterType,
  UserState,
} from "../../types/auth/auth-type";
import axiosInstance from "../../utils/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

type initialStateType = {
  user: UserState | null;
  loading: boolean;
  error: string | null;
  success: string | null;
};

const initialState: initialStateType = {
  user: null,
  loading: false,
  error: null,
  success: null,
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
      // state.user = null;
      // AsyncStorage.removeItem("accessToken");
      // delete axiosInstance.defaults.headers.common.Authorization;
    },
    hasSuccess: (state, action: PayloadAction<any>) => {
      state.success = action.payload;
      state.loading = false;
    },

    loginSuccess: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${action.payload.accessToken}`;
      AsyncStorage.setItem("accessToken", action.payload.accessToken);
      state.error = null;
      state.loading = false;
    },
    registerSuccess: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${action.payload.accessToken}`;
      AsyncStorage.setItem("accessToken", action.payload.accessToken);
      state.error = null;
      state.loading = false;
    },
    logoutSuccess: (state) => {
      state.user = null;
      AsyncStorage.removeItem("accessToken");
      state.error = null;
      state.loading = false;
      delete axiosInstance.defaults.headers.common.Authorization;
      // console.log(axiosInstance.defaults.headers.common.Authorization);
    },
    changeAvatarSuccess: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.error = null;
      state.loading = false;
    },
    updateProfileSuccess: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.error = null;
      state.loading = false;
    },
    changePasswordSuccess: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      AsyncStorage.setItem("accessToken", action.payload.accessToken);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${action.payload.accessToken}`;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  startLoading,
  hasError,
  hasSuccess,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  changeAvatarSuccess,
  updateProfileSuccess,
  changePasswordSuccess,
} = authSlice.actions;
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
          dispatch(hasError("Something went wrong"));
        }
      }
    } catch (error) {
      dispatch(hasError("Something went wrong"));
    }
  };

export const register = (data: RegisterType) => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.post("/auth/register", data);
    if (response.data.user) {
      dispatch(registerSuccess(response.data));
    } else {
      if (response.data.message) {
        dispatch(hasError("Email already exists"));
      } else {
        dispatch(hasError("Something went wrong"));
      }
    }
  } catch (error) {
    dispatch(hasError("Something went wrong"));
  }
};

export const logout = () => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    dispatch(logoutSuccess());
  } catch (error) {
    console.log(error);
  }
};

export const authenticate = () => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const accessToken = await AsyncStorage.getItem("accessToken");
    if (accessToken === null) {
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
    // console.log(error);
    dispatch(hasError("Something went wrong"));
  }
};

export const changeAvatar = (avatar: string) => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.post("/user/change-avatar", {
      avatar,
    });
    if (response.data.user) {
      dispatch(changeAvatarSuccess(response.data.user));
    } else {
      if (response.data.message) {
        dispatch(hasError(response.data.message));
      } else {
        dispatch(hasError("Something went wrong"));
      }
    }
  } catch (error) {
    dispatch(hasError("Something went wrong"));
  }
};

export const updateProfile = (data: any) => async (dispatch: any) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.post("/user/update-profile", data);
    if (response.data.message) {
      dispatch(hasError(response.data.message));
      return;
    }
    if (response.data) {
      dispatch(updateProfileSuccess(response.data));
      dispatch(hasSuccess("Profile updated successfully"));
    } else {
      dispatch(hasError("Something went wrong"));
    }
  } catch (error) {
    dispatch(hasError("Something went wrong"));
  }
};

export const addDeliveryAddress =
  (data: DeliveryAddressType) => async (dispatch: any) => {
    try {
      dispatch(startLoading());
      const response = await axiosInstance.post("/user/delivery-address", data);
      if (response.data.message) {
        dispatch(hasError(response.data.message));
        return;
      }
      if (response.data) {
        dispatch(updateProfileSuccess(response.data));
        dispatch(hasSuccess("Address added successfully"));
      } else {
        dispatch(hasError("Something went wrong"));
      }
    } catch (error) {
      dispatch(hasError("Something went wrong"));
    }
  };

export const updateDeliveryAddress =
  (id: string, data: DeliveryAddressType) => async (dispatch: any) => {
    try {
      dispatch(startLoading());
      const response = await axiosInstance.put(
        `/user/delivery-address/${id}`,
        data
      );
      if (response.data.message) {
        dispatch(hasError(response.data.message));
        return;
      }
      if (response.data) {
        dispatch(updateProfileSuccess(response.data));
        dispatch(hasSuccess("Address updated successfully"));
      } else {
        dispatch(hasError("Something went wrong"));
      }
    } catch (error) {
      dispatch(hasError("Something went wrong"));
    }
  };

export const deleteDeliveryAddress = (id: string) => async (dispatch: any) => {
  try {
    dispatch(startLoading());

    const response = await axiosInstance.delete(`/user/delivery-address`, {
      addressId: id,
    } as any);
    if (response.data.message) {
      dispatch(hasError(response.data.message));
      return;
    }
    if (response.data) {
      dispatch(updateProfileSuccess(response.data));
      dispatch(hasSuccess("Address deleted successfully"));
    } else {
      dispatch(hasError("Something went wrong"));
    }
  } catch (error) {
    dispatch(hasError("Something went wrong"));
  }
};

export const changePassword =
  (oldPassword: string, newPassword: string) => async (dispatch: any) => {
    try {
      dispatch(startLoading());
      const response = await axiosInstance.put("/user/change-password", {
        oldPassword,
        newPassword,
      });
      if (response.data.message) {
        dispatch(hasError(response.data.message));
        return;
      }
      if (response.data) {
        dispatch(hasSuccess("Password changed successfully"));
        dispatch(changePasswordSuccess(response.data));
      } else {
        dispatch(hasError("Something went wrong"));
      }
    } catch (error) {
      dispatch(hasError("Something went wrong"));
    }
  };
