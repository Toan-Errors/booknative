import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";

type FormDataType = {
  email: string;
  name: string;
  phone: string;
  country: string;
  city: string;
  district: string;
  wards: string;
  address: string;
  note: string;
  paymentMethod: string;
  shippingMethod: string;
};

interface Props {
  user: any;
  onSubmit: (data: FormDataType) => void;
}

const DeliveryAddress = ({ user, onSubmit }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: {
      email: user?.email || "",
      name: user?.firstName + " " + user?.lastName || "",
      phone: user?.phone || "",
      country: user?.country || "",
      city: user?.city || "",
      district: user?.district || "",
      wards: user?.wards || "",
      address: user?.address || "",
      note: "",
      paymentMethod: "COD",
      shippingMethod: "GHN",
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formItem}>
        <Text style={styles.formText}>Họ và tên</Text>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Họ và tên"
              style={styles.formControl}
            />
          )}
        />
      </View>
      <View style={styles.formItem}>
        <Text style={styles.formText}>Số điện thoại</Text>
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Số điện thoại"
              style={styles.formControl}
            />
          )}
        />
      </View>
      <View style={styles.formItem}>
        <Text style={styles.formText}>Email</Text>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              style={styles.formControl}
            />
          )}
        />
      </View>
      <View style={styles.formItem}>
        <Text style={styles.formText}>Quốc gia</Text>
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Quốc gia"
              style={styles.formControl}
            />
          )}
        />
      </View>
      <View style={styles.formItem}>
        <Text style={styles.formText}>Tỉnh/Thành phố</Text>
        <Controller
          name="city"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Tỉnh/Thành phố"
              style={styles.formControl}
            />
          )}
        />
      </View>
      <View style={styles.formItem}>
        <Text style={styles.formText}>Quận/Huyện</Text>
        <Controller
          name="district"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Quận/Huyện"
              style={styles.formControl}
            />
          )}
        />
      </View>
      <View style={styles.formItem}>
        <Text style={styles.formText}>Phường/Xã</Text>
        <Controller
          name="wards"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Phường/Xã"
              style={styles.formControl}
            />
          )}
        />
      </View>
      <View style={styles.formItem}>
        <Text style={styles.formText}>Địa chỉ</Text>
        <Controller
          name="address"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Địa chỉ"
              style={styles.formControl}
            />
          )}
        />
      </View>

      <View style={styles.formItem}>
        <Text style={styles.formText}>Ghi chú</Text>
        <Controller
          name="note"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Ghi chú"
              style={styles.formControl}
            />
          )}
        />
      </View>

      <View style={styles.formItem}>
        <Text style={styles.formText}>Phương thức thanh toán</Text>
        <Controller
          name="paymentMethod"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Phương thức thanh toán"
              style={styles.formControl}
            />
          )}
        />
      </View>

      <View style={styles.formItem}>
        <Text style={styles.formText}>Phương thức vận chuyển</Text>
        <Controller
          name="shippingMethod"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Phương thức vận chuyển"
              style={styles.formControl}
            />
          )}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
};

export default DeliveryAddress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
  },
  formItem: {
    marginBottom: 10,
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  formText: {
    marginBottom: 5,
  },
  formControl: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
  },
});
