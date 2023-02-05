import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { formatNumber, formatVND } from "../../../../utils/formatNumber";
import { Rating } from "react-native-ratings";
import { Ionicons } from "@expo/vector-icons";

interface SingleBookHeaderProps {
  title: string;
  author: string;
  price: number;
  price_sale: number;
  rating: number;
  rating_count: number;
  isSale: boolean;
}

const SingleBookHeader = ({
  title,
  author,
  price,
  price_sale,
  rating,
  rating_count,
  isSale,
}: SingleBookHeaderProps) => {
  return (
    <View style={styles.titleContainer}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name="ios-heart"
          size={24}
          color="red"
          style={{ position: "absolute", top: 0, right: 0 }}
        />
      </View>
      <Text style={styles.author}>{author}</Text>
      <View style={styles.ratingContainer}>
        <View>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={20}
            startingValue={rating}
            readonly
            style={{ alignItems: "flex-start" }}
          />
          <Text>
            {rating} ({formatNumber(rating_count)} đánh giá)
          </Text>
        </View>
        <View>
          <Text>Đã bán: 1,000</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        {isSale ? (
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.priceSale}>{formatVND(price_sale)}</Text>
            <Text style={styles.price}>{formatVND(price)}</Text>
          </View>
        ) : (
          <Text style={styles.priceNotSale}>{formatVND(price)}</Text>
        )}
      </View>
    </View>
  );
};

export default SingleBookHeader;

const styles = StyleSheet.create({
  titleContainer: {
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  author: {
    fontSize: 12,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceSale: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#aaa",
    textDecorationLine: "line-through",
  },
  priceNotSale: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
