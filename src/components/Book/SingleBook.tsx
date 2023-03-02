import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { fetchBook } from "../../redux/book/bookSlice";
import SingleBookSlider from "./components/SingleBook/SingleBookSlider";
import SingleBookHeader from "./components/SingleBook/SingleBookHeader";
import SingleBookReview from "./components/SingleBook/SingleBookReview";
import SingleBookInfo from "./components/SingleBook/SingleBookInfo";
import SingleBookComment from "./components/SingleBook/SingleBookComment";
import SingleBookFotter from "./components/SingleBook/SingleBookFotter";
import { addToCart, hasError, hasSuccess } from "../../redux/cart/cartSlice";
import {
  getWishlistByBookId,
  wishlistLike,
} from "../../redux/wishlist/wishlistSlice";
import { addItemsToCheckout } from "../../redux/checkout/checkoutSlice";

const SingleBook = () => {
  const route = useRoute();
  const params: any = route.params;
  const dispatch = useAppDispatch();
  const { book } = useAppSelector((state) => state.book);
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const [quantity, setQuantity] = React.useState(1);
  const { error, success } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchBook(params.id));
  }, []);

  useEffect(() => {
    dispatch(getWishlistByBookId(params.id));
  }, []);

  const isSale = book?.price_sale !== book?.price;
  const navigation = useNavigation();

  const onAddToCart = () => {
    const item = {
      bookId: book?._id || "",
      title: book?.title || "",
      author: book?.author || "",
      price: book?.price || 0,
      price_sale: book?.price_sale || 0,
      quantity: quantity || 1,
      coverImage: book?.coverImage || "",
    };
    dispatch(addToCart(item));
  };

  const onBuyNow = async () => {
    const item = {
      bookId: book?._id || "",
      title: book?.title || "",
      author: book?.author || "",
      price: book?.price || 0,
      price_sale: book?.price_sale || 0,
      quantity: quantity || 1,
      coverImage: book?.coverImage || "",
    };

    const price = isSale ? item.price_sale : item.price;
    const result = dispatch(
      addItemsToCheckout({ items: [item], total: price * quantity } as any)
    );
    if (result.payload.items.length > 0) {
      navigation.navigate("Checkout");
    } else {
      Alert.alert("Thông báo: ", "Lỗi khi thanh toán");
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error, [{ text: "OK" }]);
      dispatch(hasError(null));
      return;
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      Alert.alert("Thông báo: ", success);
      dispatch(hasSuccess(null));
    }
  }, [success]);

  const onLike = () => {
    dispatch(wishlistLike(book?._id || ""));
  };

  if (!book) return <Text>Loading...</Text>;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <SingleBookSlider images={book?.images} />
          <SingleBookHeader
            title={book?.title}
            author={book?.author}
            price={book?.price}
            price_sale={book?.price_sale}
            isSale={isSale}
            rating={3}
            rating_count={1000}
            wishlist={wishlist ? true : false}
          />
          <SingleBookReview
            _id={book?._id}
            isLiked={wishlist ? true : false}
            onLike={onLike}
          />
          <SingleBookInfo book={book} />
          <SingleBookComment />
        </View>
      </ScrollView>
      <SingleBookFotter
        _id={book?._id}
        quantity={quantity}
        setQuantity={setQuantity}
        onAddToCart={onAddToCart}
        onBuyNow={onBuyNow}
      />
    </SafeAreaView>
  );
};

export default SingleBook;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingBottom: 50,
    backgroundColor: "#fff",
  },
});
