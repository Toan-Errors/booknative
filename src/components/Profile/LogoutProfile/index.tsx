import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { logout } from "../../../redux/auth/authSlice";

const LogoutProfile = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLogout} style={styles.btnLogout}>
        <Text style={styles.textLogout}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnLogout: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
  },
  textLogout: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
});
