import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ShippingState } from "../../../types/order/shipping-type";
import { formatVND } from "../../../utils/formatNumber";

interface Props {
  shipping: ShippingState;
}

const ShippingMethod = ({ shipping }: Props) => {
  const navigation = useNavigation();

  return (
    <RNBounceable
      onPress={() => {
        navigation.navigate("Checkout", { screen: "SelectShipping" } as any);
      }}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            borderBottomColor: "#ddd",
            borderBottomWidth: 0.4,
          }}
        >
          <Text style={styles.contentTitle}>
            Phương thức vận chuyển (Nhấn để chọn)
          </Text>
        </View>

        <View style={styles.content}>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {shipping?.shippingMethod}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {formatVND(shipping?.shippingCost)}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {shipping?.shippingTime}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          right: 10,
          top: 45,
          alignItems: "center",
        }}
      >
        <Ionicons name="chevron-forward-outline" size={24} color="black" />
      </View>
    </RNBounceable>
  );
};

export default ShippingMethod;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
  },
  icLocation: {
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 20,
    zIndex: 1,
  },
  contentContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "70%",
  },
});
