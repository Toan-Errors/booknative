import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const SingleBook = () => {
  const route = useRoute();
  const book = route.params;
  console.log(book);
  return (
    <SafeAreaView>
      <Text>SingleBookScreent</Text>
    </SafeAreaView>
  );
};

export default SingleBook;

const styles = StyleSheet.create({});
