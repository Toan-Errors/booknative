import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface SingleBookFotterProps {
  _id: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

const SingleBookFotter = ({
  _id,
  quantity,
  setQuantity,
  onAddToCart,
  onBuyNow,
}: SingleBookFotterProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.quantity}>
        {/* Quantity */}
        <Ionicons
          name="add-circle-outline"
          size={30}
          color="black"
          onPress={() => {
            setQuantity(quantity + 1);
          }}
          style={styles.quantityButton}
        />
        <Text style={styles.quantityText}>{quantity}</Text>
        <Ionicons
          name="remove-circle-outline"
          size={30}
          color="black"
          onPress={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
          style={styles.quantityButton}
        />
      </View>
      <View style={styles.addToCart}>
        {/* Add to cart */}
        <TouchableOpacity onPress={onAddToCart}>
          <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buyNow}>
        {/* Buy now */}
        <TouchableOpacity onPress={onBuyNow}>
          <Text style={styles.buyNowText}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleBookFotter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 70,
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    paddingBottom: 15,
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    width: 100,
    paddingRight: 10,
    borderRightWidth: 0.5,
    borderRightColor: "black",
  },
  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
    width: 20,
    textAlign: "center",
  },
  quantityButton: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCart: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buyNow: {
    backgroundColor: "red",
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
  buyNowText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
