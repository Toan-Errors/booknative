import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import AuthProfile from "../components/Profile/AuthProfile";
import ListViewFunction from "../components/Profile/ListViewFunction";
import LogoutProfile from "../components/Profile/LogoutProfile";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { authenticate } from "../redux/auth/authSlice";

const listFunction = [
  {
    icon: "ios-person",
    title: "Thông tin cá nhân",
    navigate: "Profile",
  },
  {
    icon: "ios-card",
    title: "Đơn hàng của tôi",
    navigate: "Order",
  },
  {
    icon: "ios-heart",
    title: "Sản phẩm yêu thích",
    navigate: "Favorite",
  },
  {
    icon: "ios-star",
    title: "Đánh giá của tôi",
    navigate: "Review",
  },
  {
    icon: "ios-compass",
    title: "Địa chỉ của tôi",
    navigate: "Address",
  },
  {
    icon: "lock-closed-outline",
    title: "Đổi mật khẩu",
    navigate: "ChangePassword",
  },
];

const ProfileScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authenticate());
  }, []);

  return (
    <View style={styles.container}>
      <AuthProfile />
      <ScrollView>
        <ListViewFunction data={listFunction} />
        <LogoutProfile />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { height: "100%", backgroundColor: "#fff" },
});
