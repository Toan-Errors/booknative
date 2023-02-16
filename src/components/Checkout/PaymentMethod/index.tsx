import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PaymentState } from "../../../types/order/payment-type";

interface Props {
  payment: PaymentState;
}

const PaymentMethod = ({ payment }: Props) => {
  return (
    <View>
      <Text>{payment?.paymentMethod}</Text>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({});
