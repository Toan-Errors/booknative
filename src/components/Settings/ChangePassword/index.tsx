import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-paper";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import {
  changePassword,
  hasError,
  hasSuccess,
} from "../../../redux/auth/authSlice";

const ChangePassword = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const dispatch = useAppDispatch();
  const { error, success } = useAppSelector((state) => state.auth);

  const onSubmit = (data: any) => {
    if (data.newPassword !== data.confirmPassword) {
      alert("Password not match");
      return;
    }

    dispatch(changePassword(data.oldPassword, data.newPassword));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(hasError(null));
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      alert(success);
      dispatch(hasSuccess(null));
      reset();
    }
  }, [success]);

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Old Password"
            mode="outlined"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="oldPassword"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.oldPassword && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="New Password"
            mode="outlined"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="newPassword"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.newPassword && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Confirm Password"
            mode="outlined"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="confirmPassword"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.confirmPassword && <Text>This is required.</Text>}

      <RNBounceable
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 5,
          marginVertical: 10,
          display: "flex",
          alignItems: "center",
          width: "50%",
          marginHorizontal: "25%",
        }}
        onPress={handleSubmit((data) => onSubmit(data))}
      >
        <Text>Change Password</Text>
      </RNBounceable>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
