import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

interface RHFTextInputProps {
  name: string;
  control: any;
}

const RHFTextInput = ({ name, control, ...other }: RHFTextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          {...other}
        />
      )}
    />
  );
};

export default RHFTextInput;

const styles = StyleSheet.create({});
