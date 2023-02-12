import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  books: any;
}

const ListProduct = ({ books }: Props) => {
  return (
    <View>
      <Text>ListProduct</Text>
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({});
