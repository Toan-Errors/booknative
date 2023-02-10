import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "../hooks/useAppDispatch";
import { useNavigation } from "@react-navigation/native";
import DeliveryAddress from "../components/Checkout/DeliveryAddress";
import Payment from "../components/Checkout/Payment";
import CheckoutStatus from "../components/Checkout/CheckoutStatus";
import CheckoutStep from "../components/Checkout/CheckoutStep";

const CheckoutScreen = () => {
  const [step, setStep] = React.useState<number>(1);
  const { items } = useAppSelector((state) => state.checkout);
  const { user } = useAppSelector((state) => state.auth);
  const [diliveryAddress, setDeliveryAddress] = React.useState<any>({});

  const navigation = useNavigation();

  useEffect(() => {
    if (items.length === 0) {
      navigation.navigate("Root", { screen: "Cart" });
    }
  }, [items]);

  const onDeliveryAddress = (data: any) => {
    console.log(data);
    setDeliveryAddress(data);
    setStep(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CheckoutStep step={step} />
      {/* Tab step */}
      {step === 1 && (
        <DeliveryAddress onSubmit={onDeliveryAddress} user={user} />
      )}
      {step === 2 && <Payment />}
      {step === 3 && <CheckoutStatus />}
      {/* Tab step */}
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
});
