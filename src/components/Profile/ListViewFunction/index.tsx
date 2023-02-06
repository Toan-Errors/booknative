import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface ListViewFunctionProps {
  data: {
    icon: string;
    title: string;
    navigate?: string;
  }[];
}

const ListViewFunction = ({ data }: ListViewFunctionProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Settings", { screen: item.navigate as any })
          }
          key={index}
          style={styles.item}
        >
          <Ionicons
            name={item.icon as any}
            size={24}
            color="black"
            style={[styles.icon, { alignSelf: "center" }]}
          />
          <Text style={{ alignSelf: "center" }}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListViewFunction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  icon: {
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    width: 50,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
});
