import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import Cart from "../components/Cart/ListCart";
import { clearCart, getCart } from "../redux/cart/cartSlice";
import TotalView from "../components/Cart/TotalView";
import { addItemsToCheckout } from "../redux/checkout/checkoutSlice";
import { useNavigation } from "@react-navigation/native";
import { authenticate } from "../redux/auth/authSlice";

const CartScreen = () => {
  const [cartsSelected, setCartsSelected] = React.useState<string[]>([]);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);
  const { items: checkoutItems } = useAppSelector((state) => state.checkout);
  const [total, setTotal] = React.useState<number>(0);

  const navigation = useNavigation();

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      if (cartsSelected.includes(item._id)) {
        total += item.price_sale * item.quantity;
      }
    });
    setTotal(total);
  }, [cartsSelected]);

  useEffect(() => {
    if (!user) dispatch(clearCart());
    dispatch(getCart());
  }, [user]);

  const onCheckout = async () => {
    if (!user) {
      Alert.alert("Please login to checkout");
      return;
    }
    const carts = items.filter((item) => cartsSelected.includes(item._id));
    const data = await dispatch(
      addItemsToCheckout({ items: carts, total } as any)
    );
    if (data.payload.items.length > 0) {
      navigation.navigate("Checkout");
    } else {
      Alert.alert("Please select at least one item");
    }
  };

  return (
    <View style={styles.container}>
      {items.length === 0 && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text>Cart is empty</Text>
        </View>
      )}
      <Cart
        carts={items}
        cartsSelected={cartsSelected}
        setCartsSelected={setCartsSelected}
      />
      <TotalView onCheckout={onCheckout} total={total} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
