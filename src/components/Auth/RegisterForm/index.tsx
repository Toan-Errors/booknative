import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const RegisterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [eye, setEye] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Ionicons
            style={{ padding: 10 }}
            name="mail"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.input}>
          <Ionicons
            style={{ padding: 10 }}
            name="lock-closed"
            size={24}
            color="black"
          />
          <View>
            <TextInput
              style={[styles.textInput, { width: width / 2 - 20 }]}
              placeholder="Mật khẩu"
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="#003f5c"
              secureTextEntry={eye}
            />
            <Ionicons
              style={{
                position: "absolute",
                right: 0,
                padding: 10,
              }}
              name={eye ? "eye" : "eye-off"}
              onPress={() => setEye(!eye)}
              size={24}
              color="black"
            />
          </View>

          <TouchableOpacity
            style={{
              borderLeftColor: "#333",
              borderLeftWidth: 1,
            }}
          >
            <Text
              style={{
                color: "#fb5b5a",
                padding: 10,
                fontWeight: "bold",
              }}
            >
              Quên?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <Ionicons
            style={{ padding: 10 }}
            name="person"
            size={24}
            color="black"
          />
          <TextInput
            style={[styles.textInput, { width: width / 3 - 20 }]}
            placeholder="Họ"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={[
              styles.textInput,
              { width: width / 3, borderLeftWidth: 0.5 },
            ]}
            placeholder="Tên"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
        </View>
        <View style={styles.input}>
          <Ionicons
            style={{ padding: 10 }}
            name="call"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Số điện thoại"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterForm;

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  input: {
    backgroundColor: "#fff",
    padding: 2,
    width: width - 100,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    height: 50,
    padding: 10,
    color: "black",
  },
  loginBtn: {
    width: width - 100,
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});
