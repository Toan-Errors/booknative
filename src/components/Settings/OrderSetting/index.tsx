import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { fetchOrders } from "../../../redux/order/orderSlice";
import { formatVND } from "../../../utils/formatNumber";
import RNBounceable from "@freakycoder/react-native-bounceable";

const OrderSetting = () => {
  const { orders } = useAppSelector((state) => state.order);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {orders.map((order) => (
          <View
            key={order._id}
            style={{
              padding: 10,
              backgroundColor: "#fff",
              marginVertical: 8,
              marginHorizontal: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#000",
            }}
          >
            <View style={{}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  backgroundColor: "#fff",
                }}
              >
                <View>
                  <Text>
                    Id: {order?._id.substring(0, 5)}...
                    {order?._id.substring(20)}
                  </Text>
                </View>
                <View>
                  <Text>{order?.status}</Text>
                </View>
              </View>
              {order?.items.map((item) => (
                <View
                  key={item._id}
                  style={{
                    marginHorizontal: 0,
                    marginVertical: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    backgroundColor: "#fff",
                    width: "100%",
                  }}
                >
                  <View>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={{ uri: item.coverImage }}
                    />
                  </View>
                  <View
                    style={{
                      marginHorizontal: 10,
                      marginVertical: 5,
                      flexDirection: "column",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        backgroundColor: "#fff",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                          color: "#000",
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        backgroundColor: "#fff",
                      }}
                    >
                      <View>
                        <Text>{formatVND(item?.price_sale)}</Text>
                      </View>
                      <View>
                        <Text>Quantity: {item.quantity}</Text>
                      </View>
                    </View>
                    <View>
                      <Text>
                        Sum: {formatVND(item?.price_sale * item?.quantity)}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        backgroundColor: "#fff",
                      }}
                    >
                      <RNBounceable
                        style={{
                          backgroundColor: "#fff",
                          padding: 10,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: "#000",
                        }}
                        onPress={() => {}}
                      >
                        <Text>Mua lai</Text>
                      </RNBounceable>
                      <RNBounceable
                        style={{
                          backgroundColor: "#fff",
                          padding: 10,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: "#000",
                        }}
                        onPress={() => {}}
                      >
                        <Text>Rating</Text>
                      </RNBounceable>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
      <View style={styles.tab}>
        <View style={styles.item}>
          <Text>All</Text>
        </View>
        <View style={styles.item}>
          <Text>Processing</Text>
        </View>
        <View style={styles.item}>
          <Text>Delivered</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  list: {
    flex: 10,
    backgroundColor: "#fff",
  },
});
