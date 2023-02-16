import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { formatVND } from "../../../utils/formatNumber";

interface Props {
  total: number;
  totalShipping: number;
}

const TotalDetail = ({ total, totalShipping }: Props) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        margin: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Chi tiết thanh toán
      </Text>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Text>Tổng tiền: {formatVND(total)}</Text>
        <Text>Phí vận chuyển: {formatVND(totalShipping)}</Text>
        <Text>Tổng cộng: {formatVND(total + totalShipping)}</Text>
      </View>
    </View>
  );
};

export default TotalDetail;

const styles = StyleSheet.create({});
