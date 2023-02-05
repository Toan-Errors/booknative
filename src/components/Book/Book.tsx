import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { BookState } from "../../types/book/book-type";
import { formatVND } from "../../utils/formatNumber";

interface Props {
  book: BookState;
}

const Book: React.FC<Props> = ({ book }) => {
  const isSale = book.price_sale !== book.price;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: book.coverImage }}
        style={{ width: 130, height: 150 }}
      />
      <Text style={{ fontSize: 12, fontWeight: "bold" }}>{book.title}</Text>
      <Text style={{ fontSize: 10, color: "#aaa" }}>{book.author}</Text>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: 5,
        }}
      >
        {isSale ? (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "red" }}>
              {formatVND(book.price_sale)}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#aaa",
                textDecorationLine: "line-through",
              }}
            >
              {formatVND(book.price)}
            </Text>
          </View>
        ) : (
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            {formatVND(book.price)}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Book;

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 220,
    width: width / 2 - 20,
    margin: 2,
    elevation: 3,
    borderRadius: 5,
    padding: 10,
  },
});
