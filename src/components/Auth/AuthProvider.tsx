import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { authenticate } from "../../redux/auth/authSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const AuthProvider = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authenticate());
  }, []);
  return <View></View>;
};

export default AuthProvider;
