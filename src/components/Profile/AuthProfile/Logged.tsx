import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { UserState } from "../../../types/auth/auth-type";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { logout } from "../../../redux/auth/authSlice";

interface LoggedProps {
  user: UserState;
}

const Logged = ({ user }: LoggedProps) => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Pressable onPress={onLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Logged;

const styles = StyleSheet.create({});
