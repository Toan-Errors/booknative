import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NotLogin = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate("Auth")}
        style={styles.container}
      >
        <View>
          <Ionicons
            name="person-circle-outline"
            size={30}
            color="black"
            style={{ alignSelf: "center" }}
          />
          <Text style={{ alignSelf: "center" }}>Chưa đăng nhập</Text>
        </View>
        <View style={styles.loginOrRegister}>
          <Text style={styles.loginOrRegisterText}>Đăng nhập / Đăng ký</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NotLogin;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  loginOrRegister: {},
  loginOrRegisterText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
});
