import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import { launchImageLibrary } from "react-native-image-picker";

interface ChangeAvatarProps {
  setAvatar: (avatar: string) => void;
  avatar: string | null;
}

type Avatar = {
  uri: string;
};

const ChangeAvatar = () => {
  const [avatar, setAvatar] = React.useState<Avatar | null>(null);
  console.log(avatar);

  const handleChoosePhoto = () => {
    const options = {};

    launchImageLibrary(options as any, (response) => {
      console.log("Response = ", response);
    });
  };

  return (
    <View>
      {avatar && (
        <View>
          <Image
            source={{ uri: avatar.uri }}
            style={{ width: 100, height: 100 }}
          />
        </View>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      <Text>ChangeAvatar</Text>
    </View>
  );
};

export default ChangeAvatar;

const styles = StyleSheet.create({});
