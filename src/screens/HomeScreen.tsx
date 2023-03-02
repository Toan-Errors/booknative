import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useCallback } from "react";
import axiosInstance from "../utils/axios";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { fetchBooks } from "../redux/book/bookSlice";
import HomeSlider from "../components/Slider/HomeSlider";
import { Ionicons } from "@expo/vector-icons";
import Menu from "../components/Menu";
import ListBook from "../components/Book/ListBook";
import { clearCart, getCart } from "../redux/cart/cartSlice";
import { authenticate } from "../redux/auth/authSlice";
import Loading from "../components/Loading";
import { fetchWishlists } from "../redux/wishlist/wishlistSlice";

export default function HomeScreen() {
  const [refeshing, setRefeshing] = React.useState(false);
  const dispatch = useAppDispatch();
  const { books, loading } = useAppSelector((state) => state.book);
  const { user } = useAppSelector((state) => state.auth);

  const onRefresh = useCallback(() => {
    setRefeshing(true);
    dispatch(fetchBooks());
    dispatch(authenticate());
    dispatch(fetchWishlists());
    setRefeshing(false);
  }, []);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    dispatch(authenticate());
  }, []);

  useEffect(() => {
    if (user) dispatch(fetchWishlists());
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(getCart());
    } else {
      dispatch(clearCart());
    }
  }, [user]);

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refeshing} onRefresh={onRefresh} />
        }
      >
        <Menu />
        <View>
          <HomeSlider
            banners={[
              {
                title: "User Guides",
                subtitle: "Learn how to use the app",
                imageSource:
                  "https://c8.alamy.com/comp/2E4CD80/concept-user-guide-faq-book-for-web-page-banner-social-media-user-guide-book-2E4CD80.jpg",
              },
              {
                title: "Featured collection",
                subtitle: "Tiểu sử - Hồi ức",
                imageSource:
                  "https://img.freepik.com/premium-photo/row-old-books-isolated-black-background-banner_118047-7558.jpg",
              },
              {
                title: "Featured collection",
                subtitle: "Truyện ngắn",
                imageSource:
                  "https://i.ytimg.com/vi/QVy-QTNU5bA/maxresdefault.jpg",
              },
            ]}
          />
          {!(books.length > 0) ? (
            <Loading
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: 300,
              }}
            />
          ) : (
            <React.Fragment>
              <ListBook
                title="Fantasy"
                books={books.filter((book) => book.genres.includes("Fantasy"))}
              />
              <ListBook
                title="Comedy"
                books={books.filter((book) => book.genres.includes("Comedy"))}
              />
              <ListBook
                title="Adventure"
                books={books.filter((book) =>
                  book.genres.includes("Adventure")
                )}
              />
              <ListBook
                title="Action"
                books={books.filter((book) => book.genres.includes("Action"))}
              />
            </React.Fragment>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
