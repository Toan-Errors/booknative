import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { DeliveryAddressType } from "../../../types/auth/auth-type";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useNavigation } from "@react-navigation/native";

interface Props {
  deliveryAddress: DeliveryAddressType;
}

const DeliveryAddress = ({ deliveryAddress }: Props) => {
  const navigation = useNavigation();
  return (
    <RNBounceable
      onPress={() => {
        navigation.navigate("Checkout", { screen: "SelectDelivery" } as any);
      }}
      style={styles.container}
    >
      <View style={styles.icLocation}>
        <Ionicons name="location-outline" size={24} color="black" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>Địa chỉ nhận hàng</Text>
        <View style={styles.content}>
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text>{deliveryAddress?.name}</Text>
            <Text>{deliveryAddress?.phone}</Text>
          </View>
          <View>
            <Text>
              {deliveryAddress?.address}, {deliveryAddress?.wards},
              {deliveryAddress?.district}, {deliveryAddress?.city},
              {deliveryAddress?.country}
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

export default DeliveryAddress;

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
