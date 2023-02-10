/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
} from "react-native";
import Header from "../components/Header";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import BrowseScreen from "../screens/BrowseScreen";
import HomeScreen from "../screens/HomeScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  SettingsParamList,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import SingleBook from "../components/Book/SingleBook";
import ProfileScreen from "../screens/ProfileScreen";
import AuthScreen from "../screens/AuthScreen";
import ProfileSetting from "../components/Settings/ProfileSetting";
import OrderSetting from "../components/Settings/OrderSetting";
import AddressSetting from "../components/Settings/AddressSetting";
import FavoriteSetting from "../components/Settings/FavoriteSetting";
import ReviewSetting from "../components/Settings/ReviewSetting";
import ChangePassword from "../components/Settings/ChangePassword";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingleBook"
        component={SingleBook}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          header: () => <Header navigation={navigation} title={"Book Store"} />,
        })}
      />

      <BottomTab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          title: "Browse",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Giỏ hàng",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shopping-cart" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const Setting = createNativeStackNavigator<SettingsParamList>();

export function SettingNavigator() {
  return (
    <Setting.Navigator>
      {/* <Setting.Screen
        name="Settings"
        component={ProfileSetting}
        options={{ headerShown: false }}
      /> */}
      <Setting.Screen
        name="Profile"
        component={ProfileSetting}
        options={{ title: "Profile" }}
      />
      <Setting.Screen
        name="Order"
        component={OrderSetting}
        options={{ title: "Order" }}
      />
      <Setting.Screen
        name="Favorite"
        component={FavoriteSetting}
        options={{ title: "Favorite" }}
      />
      <Setting.Screen
        name="Review"
        component={ReviewSetting}
        options={{ title: "Review" }}
      />
      <Setting.Screen
        name="Address"
        component={AddressSetting}
        options={{ title: "Address" }}
      />
      <Setting.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ title: "Change Password" }}
      />
      <Setting.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Setting.Navigator>
  );
}
