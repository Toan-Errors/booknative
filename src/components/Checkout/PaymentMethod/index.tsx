import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PaymentState } from "../../../types/order/payment-type";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  payment: PaymentState;
}

const PaymentMethod = ({ payment }: Props) => {
  const navigation = useNavigation();

  return (
    <RNBounceable
      onPress={() => {
        navigation.navigate("Checkout", { screen: "SelectPayment" } as any);
      }}
      style={styles.container}
    >
      <Text style={styles.title}>Phương thức thanh toán</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{payment?.paymentMethod}</Text>
        <View
          style={{
            position: "absolute",
            right: 0,
            top: -20,
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>
      </View>
    </RNBounceable>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
