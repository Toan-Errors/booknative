import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import Cart from "../components/Cart/ListCart";
import { getCart } from "../redux/cart/cartSlice";
import TotalView from "../components/Cart/TotalView";
import { addItemsToCheckout } from "../redux/checkout/checkoutSlice";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const [cartsSelected, setCartsSelected] = React.useState<string[]>([]);
  const dispatch = useAppDispatch();
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
    dispatch(getCart());
  }, []);

  const onCheckout = () => {
    const carts = items.filter((item) => cartsSelected.includes(item._id));
    dispatch(addItemsToCheckout({ items: carts, total } as any));
  };

  useEffect(() => {
    if (checkoutItems.length > 0) {
      navigation.navigate("Checkout");
    }
  }, [checkoutItems]);

  return (
    <View style={styles.container}>
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
