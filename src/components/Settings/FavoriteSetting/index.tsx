import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { fetchWishlists } from "../../../redux/wishlist/wishlistSlice";

const FavoriteSetting = () => {
  const { wishlists } = useAppSelector((state) => state.wishlist);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWishlists());
  }, []);

  return (
    <View>
      <Text>FavoriteSetting</Text>
      {wishlists?.map((item) => (
        <Text key={item._id}>{item.bookId}</Text>
      ))}
    </View>
  );
};

export default FavoriteSetting;

const styles = StyleSheet.create({});
