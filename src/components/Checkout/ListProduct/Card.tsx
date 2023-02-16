import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { CartState } from "../../../types/cart/cart-type";
import { formatVND } from "../../../utils/formatNumber";

interface Props {
  book: CartState;
}

const Card = ({ book }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          overflow: "hidden",
          borderRadius: 10,
        }}
      >
        <Image
          source={{ uri: book.coverImage }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
      </View>
      <View>
        <View>
          <Text>{book.title}</Text>
          <Text
            style={{
              color: "#999",
              fontSize: 12,
            }}
          >
            {book.author}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            height: 60,
          }}
        >
          <Text>{book.quantity}</Text>
          <Text>{formatVND(book.price_sale)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
