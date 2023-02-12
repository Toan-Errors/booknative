import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { DeliveryAddressType } from "../../../../types/auth/auth-type";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { RadioButton } from "react-native-paper";

interface Props {
  address: DeliveryAddressType;
  setSelectAddress: (address: DeliveryAddressType) => void;
  selectAddress: DeliveryAddressType;
}

const DeliveryAddressItem = ({
  address,
  setSelectAddress,
  selectAddress,
}: Props) => {
  const isChecked = address.id === selectAddress.id;

  return (
    <View style={styles.container}>
      <RadioButton
        value={address.id}
        status={isChecked ? "checked" : "unchecked"}
        onPress={() => {
          setSelectAddress(address);
        }}
      />
      <View
        style={{
          width: "60%",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{address.name}</Text>
          <Text>{address.phone}</Text>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <Text>
            {address.address}, {address.wards}, {address.district},{" "}
            {address.city},{address.country}
          </Text>
        </View>
      </View>
      <RNBounceable>
        {/* Icon edit */}
        <Ionicons
          name="create-outline"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      </RNBounceable>
    </View>
  );
};

export default DeliveryAddressItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
