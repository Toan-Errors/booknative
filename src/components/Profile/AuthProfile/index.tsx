import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import NotLogin from "./NotLogin";

interface AuthProfileProps {}

const AuthProfile = ({}: AuthProfileProps) => {
  return (
    <View style={styles.container}>
      <NotLogin />
    </View>
  );
};

export default AuthProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
});
