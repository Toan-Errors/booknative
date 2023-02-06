import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import NotLogin from "./NotLogin";
import { useAppSelector } from "../../../hooks/useAppDispatch";
import Logged from "./Logged";

interface AuthProfileProps {}

const AuthProfile = ({}: AuthProfileProps) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      <View>{user ? <Logged user={user} /> : <NotLogin />}</View>
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
