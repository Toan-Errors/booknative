import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SingleBookComment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Khách hàng nhận xét:</Text>
      </View>
      <View style={styles.comment}>
        <Ionicons
          name="chatbubbles-outline"
          size={100}
          color="black"
          style={{ marginRight: 5 }}
        />
        <Text>Không có nhận xét nào</Text>
        <Pressable style={styles.button}>
          <TouchableOpacity>
            <Text style={{ color: "blue" }}>Viết nhận xét</Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </View>
  );
};

export default SingleBookComment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
  titleContainer: {
    borderBottomColor: "#000",
    paddingBottom: 10,
    borderBottomWidth: 0.5,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  comment: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "blue",
    marginTop: 10,
  },
});
