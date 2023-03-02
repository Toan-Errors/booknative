import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-paper";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useAppDispatch";
import {
  addDeliveryAddress,
  hasError,
  updateDeliveryAddress,
} from "../../../../redux/auth/authSlice";
import { useRoute } from "@react-navigation/native";

const AddDelivery = () => {
  const { error, success } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const route = useRoute();
  const params: any = route.params;
  const { user } = useAppSelector((state) => state.auth);
  const addresses = user?.deliveryAddresses;
  const [address, setAddress] = React.useState<any>(null);

  useEffect(() => {
    if (params?.id) {
      const address = addresses?.find((item) => item.id === params.id);
      setAddress(address);
    }
  }, []);

  const defaultValues = useMemo(
    () => ({
      name: address?.name || "",
      phone: address?.phone || "",
      address: address?.address || "",
      wards: address?.wards || "",
      district: address?.district || "",
      city: address?.city || "",
      country: address?.country || "",
    }),
    [address]
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (params?.id && address) {
      reset(defaultValues);
    }
    if (!params?.id) {
      reset(defaultValues);
    }
  }, [address]);

  const onSubmit = (data: any) => {
    if (params?.id) {
      dispatch(updateDeliveryAddress(params?.id, data));
    } else {
      dispatch(addDeliveryAddress(data));
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("Thông báo", error);
      dispatch(hasError(null));
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      Alert.alert("Thông báo", success);
    }
  }, [success]);

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Họ và tên"
          />
        )}
        name="name"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.name && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Số điện thoại"
          />
        )}
        name="phone"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.phone && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Địa chỉ"
          />
        )}
        name="address"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.address && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Phường/Xã"
          />
        )}
        name="wards"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.wards && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Quận/Huyện"
          />
        )}
        name="district"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.district && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Thành phố"
          />
        )}
        name="city"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.city && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Quốc gia"
          />
        )}
        name="country"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.country && <Text>This is required.</Text>}

      {params?.id ? (
        <Button title="Cập nhật" onPress={handleSubmit(onSubmit)} />
      ) : (
        <Button title="Thêm" onPress={handleSubmit(onSubmit)} />
      )}
    </View>
  );
};

export default AddDelivery;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
