import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { BookState } from "../../types/book/book-type";
import { formatVND } from "../../utils/formatNumber";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  book: BookState;
}

const Book: React.FC<Props> = ({ book }) => {
  const isSale = book.price_sale !== book.price;

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}>
        {isSale && (
          <View
            style={{
              backgroundColor: "red",
              padding: 5,
              borderTopLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {Math.round(((book.price - book.price_sale) / book.price) * 100)}%
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          padding: 5,
          borderTopRightRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      >
        <Ionicons
          name="ios-heart"
          size={20}
          // color={book.isFavorite ? "red" : "#aaa"}
          color={"#aaa"}
        />
      </View>
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
