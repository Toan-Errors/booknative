import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import ChangeAvatar from "./ChangeAvatar";
import { hasError } from "../../../redux/auth/authSlice";
import FormProfile from "./FormProfile";

const ProfileSetting = () => {
  const { user, error } = useAppSelector((state) => state.auth);
  const [avatar, setAvatar] = useState<string | undefined>(user?.avatar); // [1
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
      dispatch(hasError(null));
      return;
    }
  }, [error]);

  return (
    <View>
      <ChangeAvatar avatar={avatar} setAvatar={setAvatar} />
      <FormProfile />
    </View>
  );
};

export default ProfileSetting;

const styles = StyleSheet.create({});
