import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useAppDispatch";
import { useNavigation } from "@react-navigation/native";
import { selectPaymentMethod } from "../../../../redux/checkout/checkoutSlice";
import RNBounceable from "@freakycoder/react-native-bounceable";

const SelectPayment = () => {
  const { payments } = useAppSelector((state) => state.checkout);
  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const onSelectPayment = (payment: any) => {
    dispatch(selectPaymentMethod(payment));
    navigation.navigate("Checkout", { screen: "Home" } as any);
  };

  return (
    <View>
      {payments.map((payment) => {
        return (
          <RNBounceable
            key={payment._id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: "#000",
              padding: 10,
              margin: 10,
            }}
            onPress={() => onSelectPayment(payment)}
          >
            <Text>{payment?.paymentMethod}</Text>
          </RNBounceable>
        );
      })}
    </View>
  );
};

export default SelectPayment;

const styles = StyleSheet.create({});
