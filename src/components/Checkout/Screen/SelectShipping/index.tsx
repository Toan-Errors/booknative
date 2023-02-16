import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useAppDispatch";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { selectShippingMethod } from "../../../../redux/checkout/checkoutSlice";
import { useNavigation } from "@react-navigation/native";
import { formatVND } from "../../../../utils/formatNumber";

const SelectShipping = () => {
  const dispatch = useAppDispatch();
  const { shippings } = useAppSelector((state) => state.checkout);

  const navigation = useNavigation();

  const onSelectShipping = (shipping: any) => {
    dispatch(selectShippingMethod(shipping));
    navigation.navigate("Checkout", { screen: "Home" } as any);
  };

  return (
    <View>
      {shippings.map((shipping) => {
        return (
          <RNBounceable
            key={shipping._id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: "#000",
              padding: 10,
              margin: 10,
            }}
            onPress={() => onSelectShipping(shipping)}
          >
            <Text>{shipping.shippingMethod}</Text>
            <Text>{formatVND(shipping.shippingCost)}</Text>
            <Text>{shipping.shippingTime}</Text>
          </RNBounceable>
        );
      })}
    </View>
  );
};

export default SelectShipping;

const styles = StyleSheet.create({});
