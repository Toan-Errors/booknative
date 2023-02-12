import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useAppDispatch";
import DeliveryAddressItem from "./DeliveryAddressItem";
import { DeliveryAddressType } from "../../../../types/auth/auth-type";
import { addDeliveryAddress } from "../../../../redux/checkout/checkoutSlice";
import { useNavigation } from "@react-navigation/native";
import RNBounceable from "@freakycoder/react-native-bounceable";

const SelectDelivery = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { delivery_address } = useAppSelector((state) => state.checkout);
  const { deliveryAddresses } = user || {};

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const onSelectAddress = (address: DeliveryAddressType) => {
    dispatch(addDeliveryAddress(address as any));
    navigation.navigate("Checkout", { screen: "Home" } as any);
  };

  return (
    <ScrollView style={styles.container}>
      {deliveryAddresses?.map((address, index) => {
        return (
          <View key={address.id}>
            <DeliveryAddressItem
              address={address}
              setSelectAddress={onSelectAddress}
              selectAddress={delivery_address}
            />
          </View>
        );
      })}
      <RNBounceable
        style={styles.add}
        onPress={() =>
          navigation.navigate("Checkout", { screen: "AddDelivery" } as any)
        }
      >
        <Text>+ Thêm địa chỉ</Text>
      </RNBounceable>
    </ScrollView>
  );
};

export default SelectDelivery;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  add: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#fff",
    border: 1,
    borderTopColor: "#ccc",
    borderLeftColor: "#ccc",
  },
});
