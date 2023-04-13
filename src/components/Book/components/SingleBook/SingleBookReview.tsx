import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import RNBounceable from "@freakycoder/react-native-bounceable";

interface Props {
  _id: string;
  isLiked: boolean;
  onLike: () => void;
}

const SingleBookReview = ({ _id, isLiked, onLike }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Mã sản phẩm */}
        <Text
          style={{
            color: "#000",
            fontWeight: "bold",
            textAlign: "left",
            marginBottom: 5,
          }}
        >
          Mã sản phẩm: {_id}
        </Text>
        {/* Nhãn hiệu */}
        <Text>Nhãn hiệu: Khác</Text>
      </View>
      <View style={styles.content}>
        <RNBounceable style={styles.like} onPress={onLike}>
          <Ionicons
            name={isLiked ? "heart" : "heart-outline"}
            size={20}
            color="red"
          />
          <Text>Thích</Text>
        </RNBounceable>
        <View style={styles.comment}>
          <Ionicons name="chatbubble-outline" size={20} color="black" />
          <Text>Bình luận</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleBookReview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  like: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
