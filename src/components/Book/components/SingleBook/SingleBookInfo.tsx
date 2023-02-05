import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BookSingleState } from "../../../../types/book/book-type";
import { formatDate } from "../../../../utils/formatDate";

import ReadMore from "@fawazahmed/react-native-read-more";
import clip from "text-clipper";
import ModalScreen from "../../../../screens/ModalScreen";
import SingleBookModal from "./SingleBookModal";

interface Props {
  book: BookSingleState;
}
const SingleBookInfo = ({ book }: Props) => {
  const [visiable, setVisiable] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text>Thông tin sản phẩm:</Text>
      <View>
        <View style={styles.listAttribute}>
          <Text>Tác giả:</Text>
          <Text>{book?.author}</Text>
        </View>
        <View style={styles.listAttribute}>
          <Text>Nhà xuất bản:</Text>
          <Text>{book?.publisher}</Text>
        </View>
        <View style={styles.listAttribute}>
          <Text>Ngày xuất bản:</Text>
          <Text>{formatDate(book?.createdAt)}</Text>
        </View>
        <View style={styles.listAttribute}>
          <Text>Ngôn ngữ:</Text>
          <Text>{book?.language}</Text>
        </View>
        <View style={styles.listAttribute}>
          <Text>Trọng lượng:</Text>
          <Text>0.5 kg</Text>
        </View>
        <View style={styles.listAttribute}>
          <Text>Kích thước:</Text>
          <Text>20 x 15 cm</Text>
        </View>
        <View style={styles.listAttribute}>
          <Text>Số trang:</Text>
          <Text>{book?.pages} Trang</Text>
        </View>
        <View style={styles.listAttribute}>
          <Text>Loại bìa:</Text>
          <Text>Bìa mềm</Text>
        </View>
        <View style={styles.listAttribute}>
          <Text>Thể loại:</Text>
          <Text>{book?.genres.join(", ")}</Text>
        </View>
        <View style={styles.listAttribute}>
          <Text>Country</Text>
          <Text>{book?.country}</Text>
        </View>
        <View style={styles.listAttribute}>
          <Text>Độ tuổi</Text>
          <Text>{book?.ageGroup}</Text>
        </View>
      </View>
      {/* Description HTML Code Render */}
      <Text style={{ marginTop: 10 }}>Giới thiệu:</Text>
      <ReadMore
        numberOfLines={3}
        seeMoreText="Xem thêm"
        seeLessText="Thu gọn"
        onSeeMore={() => {
          setVisiable(true);
        }}
      >
        {clip(book?.description, book?.description.length, {
          html: true,
          stripTags: true,
        })}
      </ReadMore>
      <SingleBookModal
        visible={visiable}
        setVisible={setVisiable}
        description={book?.description}
      />
    </View>
  );
};

export default SingleBookInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
  },
  listAttribute: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
  },
  description: {
    padding: 10,
    height: 200,
    overflow: "hidden",
  },
});
