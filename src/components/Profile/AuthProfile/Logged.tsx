import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { UserState } from "../../../types/auth/auth-type";
import { Ionicons } from "@expo/vector-icons";

interface LoggedProps {
  user: UserState;
}

const Logged = ({ user }: LoggedProps) => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <View style={styles.container}>
          {user?.avatar ? (
            <Image
              source={{ uri: user?.avatar }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: 10,
              }}
            />
          ) : (
            <Ionicons
              name="person-circle-outline"
              size={60}
              color="black"
              style={{
                alignSelf: "center",
                marginRight: 10,
              }}
            />
          )}
          <Text style={styles.text}>
            Xin chào {user.firstName + " " + user.lastName}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Logged;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  text: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
});
