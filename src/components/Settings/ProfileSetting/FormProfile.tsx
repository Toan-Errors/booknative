import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";

const FormProfile = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View>
      <Text>FormProfile</Text>
    </View>
  );
};

export default FormProfile;

const styles = StyleSheet.create({});
