import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { useNavigation } from "@react-navigation/native";
import DeliveryAddress from "../components/Checkout/DeliveryAddress";
import { DeliveryAddressType } from "../types/auth/auth-type";
import ListProduct from "../components/Checkout/ListProduct";
import {
  addDeliveryAddress,
  checkoutPayment,
  clearCheckout,
  fetchPaymentMethods,
  fetchShippingMethods,
  hasSuccess,
} from "../redux/checkout/checkoutSlice";
import Voucher from "../components/Checkout/Voucher";
import ShippingMethod from "../components/Checkout/ShippingMethod";
import PaymentMethod from "../components/Checkout/PaymentMethod";
import TotalDetail from "../components/Checkout/TotalDetail";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { deleteItems } from "../redux/cart/cartSlice";

const CheckoutScreen = () => {
  const { items, delivery_address, shipping, payment, total, error, success } =
    useAppSelector((state) => state.checkout);
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user?.deliveryAddresses) return;
    const deliveryAddress = user?.deliveryAddresses[0];
    dispatch(addDeliveryAddress(deliveryAddress as any));
  }, [user?.deliveryAddresses]);

  useEffect(() => {
    dispatch(fetchShippingMethods());
    dispatch(fetchPaymentMethods());
  }, []);

  const navigation = useNavigation();

  useEffect(() => {
    if (items.length === 0) {
      navigation.navigate("Root", { screen: "Cart" });
    }
  }, [items]);

  const onCheckout = () => {
    if (!delivery_address) return;
    if (!shipping) return;
    if (!payment) return;

    const data = {
      delivery_address,
      shipping,
      payment: payment.paymentMethod,
      items,
      subtotal: total,
      total: total + shipping.shippingCost,
    };

    dispatch(checkoutPayment(data));
  };

  useEffect(() => {
    if (success) {
      dispatch(hasSuccess("" as any));
      const ids = items.map((item) => item._id);
      dispatch(deleteItems(ids));
      dispatch(clearCheckout());
      alert("Thanh toán thành công");
      navigation.navigate("Root", { screen: "Home" });
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <DeliveryAddress deliveryAddress={delivery_address} />
        <ListProduct books={items} />
        <Voucher />
        <ShippingMethod shipping={shipping} />
        <PaymentMethod payment={payment} />
        <TotalDetail total={total} totalShipping={shipping.shippingCost} />
        <RNBounceable
          style={{
            backgroundColor: "#000",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            margin: 20,
          }}
          onPress={onCheckout}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Thanh toán
          </Text>
        </RNBounceable>
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
