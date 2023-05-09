import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BookState } from "../../types/book/book-type";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../hooks/useAppDispatch";
import Book from "./Book";

interface BooksGirdProps {
  books: BookState[];
}

const BooksGird = ({ books }: BooksGirdProps) => {
  const { wishlists } = useAppSelector((state) => state.wishlist);

  const navigation = useNavigation();
  const isWishlisted = (id: string) => {
    return wishlists.some((wishlist) => wishlist.bookId === id);
  };

  return (
    <View>
      <FlatList
        data={books}
        renderItem={({ item, index }) => (
          <RNBounceable
            onPress={() => {
              navigation.navigate("SingleBook", { id: item._id });
            }}
          >
            <Book
              isFavorite={isWishlisted(item?._id)}
              key={index}
              book={item}
            />
          </RNBounceable>
        )}
        keyExtractor={(item) => item._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BooksGird;

const styles = StyleSheet.create({});
