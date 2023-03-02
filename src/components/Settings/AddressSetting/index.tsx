import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../../hooks/useAppDispatch";

const AddressSetting = () => {
  const { user } = useAppSelector((state) => state.auth);
  const addresses = user?.deliveryAddresses;

  return (
    <View>
      {addresses?.map((address) => (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#000",
            padding: 10,
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius: 10,
          }}
          key={address.id}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{address.name}</Text>
            <Text>{address.phone}</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text>{address.address}</Text>
            <Text>{address.district}</Text>
            <Text>{address.wards}</Text>
            <Text>{address.city}</Text>
            <Text>{address.country}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default AddressSetting;

const styles = StyleSheet.create({});
