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

interface Props {
  books: any;
  title: string;
}

const ListBook: React.FC<Props> = ({ books, title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={books}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SingleBook", { book: item });
            }}
          >
            <Book key={index} book={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
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
