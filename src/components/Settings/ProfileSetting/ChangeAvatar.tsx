import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { HOST_API_IMAGE } from "../../../constants/Config";

interface ChangeAvatarProps {
  avatar: string | undefined;
  setAvatar: (avatar: string) => void;
}

const ChangeAvatar = ({ avatar, setAvatar }: ChangeAvatarProps) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleChoosePhoto = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (result.canceled) {
        return;
      }

      let localUri = result.assets[0].uri;
      setLoading(true);
      setAvatar(localUri);
      let filename = localUri.split("/").pop();

      let match = /\.(\w+)$/.exec(filename as string);
      let type = match ? `image/${match[1]}` : `image`;

      let formData = new FormData();
      formData.append("image", {
        uri: localUri,
        name: filename,
        type,
      } as any);

      const response = await axios.post(HOST_API_IMAGE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        setLoading(false);
        setAvatar(HOST_API_IMAGE + "/" + response.data);
      } else {
        setLoading(false);
        console.log("Error");
      }
    } catch (e) {
      console.log(e);
      setAvatar("");
    }
  };

  return (
    <View style={styles.container}>
      <View
        onTouchEnd={handleChoosePhoto}
        style={{
          width: 150,
          height: 150,
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {avatar && (
          <Image
            source={{ uri: avatar }}
            style={{
              width: "100%",
              height: "100%",
              opacity: loading ? 0.2 : 1,
              resizeMode: "cover",
              position: "absolute",
              borderRadius: 150,
            }}
          />
        )}
        {!avatar && (
          <View
            style={{
              position: "absolute",
              borderRadius: 150,
              overflow: "hidden",
            }}
          >
            <Ionicons name="ios-person" size={150} color="#ccc" />
          </View>
        )}
        <Ionicons
          name="ios-add"
          size={15}
          color="#ccc"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "#fff",
            padding: 10,
          }}
        />
      </View>
    </View>
  );
};

export default ChangeAvatar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
