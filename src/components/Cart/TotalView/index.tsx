import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { formatVND } from "../../../utils/formatNumber";
import RNBounceable from "@freakycoder/react-native-bounceable";

interface Props {
  total: number | 0;
  onCheckout: () => void;
}

const TotalView = ({ total, onCheckout }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Tổng tiền: {"\n" + formatVND(total)}</Text>
      </View>
      <RNBounceable style={styles.button} onPress={onCheckout}>
        <Text style={styles.buttonText}>Thanh toán</Text>
      </RNBounceable>
    </View>
  );
};

export default TotalView;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});
