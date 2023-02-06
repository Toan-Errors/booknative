import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import RegisterForm from "../components/Auth/RegisterForm";
import LoginForm from "../components/Auth/LoginForm";
import OtherAuth from "../components/Auth/OtherAuth";

const AuthScreen = () => {
  const [tab, setTab] = React.useState<"login" | "register">("login");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        {/* Logo */}
        <Ionicons
          style={{ padding: 10 }}
          name="logo-instagram"
          size={100}
          color="black"
        />
      </View>
      {/* Tabs */}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text
          style={{
            color: tab === "login" ? "#000" : "#ccc",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left",
          }}
          onPress={() => setTab("login")}
        >
          Đăng nhập
        </Text>
        <Text
          style={{
            color: tab === "register" ? "#000" : "#ccc",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left",
          }}
          onPress={() => setTab("register")}
        >
          Đăng ký
        </Text>
      </View>
      <ScrollView>
        {/* Form */}
        {tab === "login" ? <LoginForm /> : <RegisterForm />}
        <OtherAuth />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    height: "100%",
  },
  logo: {
    backgroundColor: "#fff",
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
