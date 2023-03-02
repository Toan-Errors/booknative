import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Book from "./Book";
import { useNavigation } from "@react-navigation/native";
import { BookState } from "../../types/book/book-type";
import { useAppSelector } from "../../hooks/useAppDispatch";
import RNBounceable from "@freakycoder/react-native-bounceable";

interface Props {
  books: BookState[];
  title: string;
}

const ListBook: React.FC<Props> = ({ books, title }) => {
  const navigation = useNavigation();
  const { wishlists } = useAppSelector((state) => state.wishlist);

  const isWishlisted = (id: string) => {
    return wishlists.some((wishlist) => wishlist.bookId === id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
        numColumns={1}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListBook;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
});
