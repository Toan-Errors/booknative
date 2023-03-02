import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { fetchOrders } from "../../../redux/order/orderSlice";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { Price, TotalPrice } from "../../../utils/formatPrice";

const OrderSetting = () => {
  const { orders } = useAppSelector((state) => state.order);
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [user]);

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
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "flex-start",
                  backgroundColor: "#fff",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  Id: {order?._id.substring(0, 5)}...
                  {order?._id.substring(20)}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "red",
                    textTransform: "uppercase",
                  }}
                >
                  {order?.status}
                </Text>
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
                      paddingLeft: 10,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      width: "100%",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#000",
                        width: 250,
                      }}
                    >
                      {item.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        backgroundColor: "#fff",
                      }}
                    >
                      <View>
                        <Text>{Price(item?.price, item?.price_sale)}</Text>
                      </View>
                      <View>
                        <Text>Quantity: {item.quantity}</Text>
                      </View>
                    </View>
                    <View>
                      <Text>
                        Tổng:{" "}
                        {TotalPrice(
                          item?.price,
                          item?.price_sale,
                          item?.quantity
                        )}
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
