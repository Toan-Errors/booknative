import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { useNavigation } from "@react-navigation/native";
import DeliveryAddress from "../components/Checkout/DeliveryAddress";
import { DeliveryAddressType } from "../types/auth/auth-type";
import ListProduct from "../components/Checkout/ListProduct";
import { addDeliveryAddress } from "../redux/checkout/checkoutSlice";

const CheckoutScreen = () => {
  const { items, delivery_address } = useAppSelector((state) => state.checkout);
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user?.deliveryAddresses) return;
    const deliveryAddress = user?.deliveryAddresses[0];
    dispatch(addDeliveryAddress(deliveryAddress as any));
  }, [user?.deliveryAddresses]);

  const navigation = useNavigation();

  useEffect(() => {
    if (items.length === 0) {
      navigation.navigate("Root", { screen: "Cart" });
    }
  }, [items]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <DeliveryAddress deliveryAddress={delivery_address} />
        <ListProduct books={items} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
});
