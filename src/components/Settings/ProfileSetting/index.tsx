import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import ChangeAvatar from "./ChangeAvatar";
import {
  hasError,
  hasSuccess,
  updateProfile,
} from "../../../redux/auth/authSlice";
import FormProfile from "./FormProfile";

const ProfileSetting = () => {
  const { user, error, success, loading } = useAppSelector(
    (state) => state.auth
  );
  const [avatar, setAvatar] = useState<string | undefined>(user?.avatar); // [1
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
      dispatch(hasError(null));
      return;
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      Alert.alert("Thông báo: ", success);
      dispatch(hasSuccess(null));
    }
  }, [success]);

  const onSubmit = (data: any) => {
    if (loading) return;
    if (avatar) {
      data.avatar = avatar;
    }
    dispatch(updateProfile(data));
  };

  return (
    <ScrollView>
      <ChangeAvatar avatar={avatar} setAvatar={setAvatar} />
      <FormProfile user={user} onSubmit={onSubmit} />
    </ScrollView>
  );
};

export default ProfileSetting;

const styles = StyleSheet.create({});
