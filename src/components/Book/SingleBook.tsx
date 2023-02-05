import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { fetchBook } from "../../redux/book/bookSlice";
import SingleBookSlider from "./components/SingleBook/SingleBookSlider";
import SingleBookHeader from "./components/SingleBook/SingleBookHeader";
import SingleBookReview from "./components/SingleBook/SingleBookReview";
import SingleBookInfo from "./components/SingleBook/SingleBookInfo";
import SingleBookComment from "./components/SingleBook/SingleBookComment";
import SingleBookFotter from "./components/SingleBook/SingleBookFotter";

const SingleBook = () => {
  const route = useRoute();
  const params: any = route.params;
  const dispatch = useAppDispatch();
  const { book } = useAppSelector((state) => state.book);
  const [quantity, setQuantity] = React.useState(1);

  useEffect(() => {
    dispatch(fetchBook(params.id));
  }, []);

  const isSale = book?.price_sale !== book?.price;

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
          />
          <SingleBookReview _id={book?._id} isLiked={true} />
          <SingleBookInfo book={book} />
          <SingleBookComment />
        </View>
      </ScrollView>
      <SingleBookFotter
        _id={book?._id}
        quantity={quantity}
        setQuantity={setQuantity}
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
