import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

interface Props {
  book: any;
}

const Book: React.FC<Props> = ({ book }) => {
  return (
    <View style={styles.container}>
      <Text>
        {book.title} - {book.author} - {book.price}
      </Text>
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
    height: width / 2.5,
    width: width / 2.5 - 20,
    margin: 2,
    elevation: 3,
    borderRadius: 5,
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
});
