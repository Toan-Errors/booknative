import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CartState } from "../../../types/cart/cart-type";
import { formatVND } from "../../../utils/formatNumber";
import Card from "./Card";

interface Props {
  books: CartState[];
}

const ListProduct = ({ books }: Props) => {
  return (
    <View>
      {books.map((book: CartState) => (
        <Card key={book._id} book={book} />
      ))}
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({});
