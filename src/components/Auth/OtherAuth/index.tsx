import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const OtherAuth = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hoặc</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="logo-facebook" size={24} color="black" />
          <Text>Đăng nhập bằng Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="logo-google" size={24} color="black" />
          <Text>Đăng nhập bằng Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="logo-apple" size={24} color="black" />
          <Text>Đăng nhập bằng Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtherAuth;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    height: 50,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    margin: 10,
    alignItems: "center",
  },
});
