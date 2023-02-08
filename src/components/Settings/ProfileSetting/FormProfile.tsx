import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { updateProfile } from "../../../redux/auth/authSlice";

type FormDataType = {
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
};

interface Props {
  user: any;
  onSubmit: (data: FormDataType) => void;
}

const FormProfile = ({ user, onSubmit }: Props) => {
  const dispatch = useAppDispatch();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      phone: user?.phone,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.formItem}>
        <Text style={styles.formText}>First Name</Text>
        <Controller
          name="firstName"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="First Name"
              style={styles.formControl}
            />
          )}
        />
      </View>

      <View style={styles.formItem}>
        <Text style={styles.formText}>Last Name</Text>
        <Controller
          name="lastName"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Last Name"
              style={styles.formControl}
            />
          )}
        />
      </View>

      <View style={styles.formItem}>
        <Text style={styles.formText}>Phone</Text>
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Phone"
              style={styles.formControl}
            />
          )}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default FormProfile;

const styles = StyleSheet.create({
  container: {},
  formItem: {
    marginBottom: 10,
    padding: 10,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  formText: {
    marginBottom: 5,
  },
  formControl: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
});
