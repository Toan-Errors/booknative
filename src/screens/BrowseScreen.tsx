import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BooksGird from "../components/Book/BooksGird";
import { useAppSelector } from "../hooks/useAppDispatch";

const BrowseScreen = () => {
  const { books } = useAppSelector((state) => state.book);
  return (
    <View style={styles.wrapper}>
      <BooksGird books={books} />
    </View>
  );
};

export default BrowseScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
