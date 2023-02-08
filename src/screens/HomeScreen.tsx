import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useCallback } from "react";
import axiosInstance from "../utils/axios";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { fetchBooks } from "../redux/book/bookSlice";
import HomeSlider from "../components/Slider/HomeSlider";
import { Ionicons } from "@expo/vector-icons";
import Menu from "../components/Menu";
import ListBook from "../components/Book/ListBook";

export default function HomeScreen() {
  const [refeshing, setRefeshing] = React.useState(false);
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.book);

  const onRefresh = useCallback(() => {
    setRefeshing(true);
    dispatch(fetchBooks());
    setRefeshing(false);
  }, []);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

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
            books={books.filter((book) => book.genres.includes("Adventure"))}
          />
          <ListBook
            title="Action"
            books={books.filter((book) => book.genres.includes("Action"))}
          />
          <Text>HomeScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
