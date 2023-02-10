import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { CartItem, CartState } from "../../../types/cart/cart-type";
import CardCart from "../CardCart";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { changeQuantity, hasError } from "../../../redux/cart/cartSlice";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Props {
  carts: CartState[];
  cartsSelected: string[];
  setCartsSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const Cart = ({ carts, cartsSelected, setCartsSelected }: Props) => {
  const { error, loading } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const onChangeQuantity = (id: string, type: string) => {
    dispatch(changeQuantity(id, type));
  };

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
      dispatch(hasError(null));
    }
  }, [error]);

  return (
    <ScrollView style={styles.container}>
      {carts.map((cart) => (
        <View style={styles.item} key={cart._id}>
          <View>
            <BouncyCheckbox
              isChecked={cartsSelected.includes(cart._id)}
              onPress={() => {
                if (cartsSelected.includes(cart._id)) {
                  setCartsSelected(
                    cartsSelected.filter((item) => item !== cart._id)
                  );
                } else {
                  setCartsSelected([...cartsSelected, cart._id]);
                }
              }}
            />
          </View>
          <CardCart onChangeQuantity={onChangeQuantity} cart={cart} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  item: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
});
