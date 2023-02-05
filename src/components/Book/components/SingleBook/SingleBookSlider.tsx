import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import SwiperFlatList from "react-native-swiper-flatlist";

interface SingleBookSliderProps {
  images: string[];
}

const SingleBookSlider = ({ images }: SingleBookSliderProps) => {
  const [index, setIndex] = React.useState(0);
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={index}
        onChangeIndex={({ index }) => setIndex(index)}
        data={images}
        renderItem={({ item }) => (
          <View style={styles.child}>
            <Image source={{ uri: item }} style={styles.imageChild} />
          </View>
        )}
      />

      <Text style={{ textAlign: "center" }}>
        {index + 1} / {images.length}
      </Text>
    </View>
  );
};

export default SingleBookSlider;

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
  child: {
    width: width,
    height: width / 2 + 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imageChild: {
    width: width / 2,
    height: width / 2 + 30,
    cover: "cover",
  },
});
