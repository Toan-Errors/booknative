import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

type Props = {
  navigation: any;
  title: string;
};

function Header(props: Props) {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    display: "none",
  },
  headerText: {
    color: "black",
    textAlign: "center",
    width: "100%",
    padding: 20,
    fontWeight: "bold",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default Header;
