import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";

interface BannerProps {
  title: string;
  subtitle: string;
  imageSource: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, imageSource }) => {
  return (
    <View style={styles.child}>
      <View>
        <Text style={styles.child_title}>{title}</Text>
        <Text style={styles.child_subtitle}>{subtitle}</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          width: width - 100,
          height: width / 2,
          borderRadius: 12,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
      >
        <Image
          source={{ uri: imageSource }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 12,
          }}
        />
      </View>
    </View>
  );
};

interface SliderProps {
  banners: BannerProps[];
}

const HomeSlider: React.FC<SliderProps> = ({ banners }) => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={10}
        autoplayLoop
        index={2}
        data={banners}
        renderItem={({ item }) => (
          <Banner
            title={item.title}
            subtitle={item.subtitle}
            imageSource={item.imageSource}
          />
        )}
      />
    </View>
  );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 20,
    backgroundColor: "white",
  },
  child: {
    width: width - 40,
    height: width / 2 + 50,
    backgroundColor: "white",
    borderRadius: 10,
    position: "relative",
  },
  child_title: {
    color: "black",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  child_subtitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeSlider;
