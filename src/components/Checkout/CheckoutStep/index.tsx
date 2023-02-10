import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RNBounceable from "@freakycoder/react-native-bounceable";

interface Props {
  step: number;
}

const CheckoutStep = ({ step }: Props) => {
  return (
    <View style={styles.header}>
      <RNBounceable
        style={{
          backgroundColor: step === 1 ? "red" : "white",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text>(1) Địa chỉ</Text>
      </RNBounceable>
      <RNBounceable
        style={{
          backgroundColor: step === 2 ? "red" : "white",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text>(2) Thanh toán</Text>
      </RNBounceable>
      <RNBounceable
        style={{
          backgroundColor: step === 3 ? "red" : "white",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text>(3) Trạng thái</Text>
      </RNBounceable>
    </View>
  );
};

export default CheckoutStep;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
});
