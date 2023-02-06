import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import NotLogin from "./NotLogin";
import { useAppSelector } from "../../../hooks/useAppDispatch";
import Logged from "./Logged";

interface AuthProfileProps {}

const AuthProfile = ({}: AuthProfileProps) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      {user ? <Logged user={user} /> : <NotLogin />}
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
