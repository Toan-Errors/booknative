import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { CartItem, CartState } from "../../../types/cart/cart-type";
import { formatVND } from "../../../utils/formatNumber";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  cart: CartState;
  onChangeQuantity: (id: string, type: string) => void;
}

const CardCart = ({ cart, onChangeQuantity }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.parentImage}>
        <Image source={{ uri: cart?.coverImage }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{cart?.title}</Text>
        <Text style={styles.author}>{cart?.author}</Text>
        <View style={styles.subcontent}>
          <View style={styles.price}>
            <Text style={styles.price_sale}>{formatVND(cart?.price_sale)}</Text>
            <Text style={styles.price_old}>{formatVND(cart?.price)}</Text>
          </View>
          <View style={styles.totalinfo}>
            <View style={styles.changeQuantity}>
              <TouchableOpacity
                onPress={() => {
                  onChangeQuantity(cart?._id, "increase");
                }}
              >
                <Ionicons
                  name="add-outline"
                  size={20}
                  color="black"
                  style={styles.quantityButton}
                />
              </TouchableOpacity>
              <Text style={styles.quantity}>{cart?.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  onChangeQuantity(cart?._id, "decrease");
                }}
              >
                <Ionicons
                  name="remove-outline"
                  size={20}
                  color="black"
                  style={styles.quantityButton}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.totalContainer}>
              <Text style={styles.total}>
                {formatVND(cart?.price_sale * cart?.quantity)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  parentImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    padding: 5,
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  content: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    width: 200,
  },
  author: { fontSize: 10, color: "#aaa" },
  subcontent: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  price: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  price_sale: {
    fontSize: 15,
    fontWeight: "bold",
    color: "red",
  },
  price_old: {
    fontSize: 10,
    marginLeft: 5,
    fontWeight: "bold",
    color: "#aaa",
    textDecorationLine: "line-through",
  },
  totalinfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  changeQuantity: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  quantity: {
    fontSize: 12,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  quantityButton: {
    padding: 5,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 30,
  },
  total: { fontSize: 15, fontWeight: "bold" },
});
