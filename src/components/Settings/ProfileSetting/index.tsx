import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../../hooks/useAppDispatch";
import ChangeAvatar from "./ChangeAvatar";

const ProfileSetting = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [avatar, setAvatar] = React.useState<string | null>(null);

  return (
    <View>
      <ChangeAvatar />
    </View>
  );
};

export default ProfileSetting;

const styles = StyleSheet.create({});
