/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Settings: NavigatorScreenParams<SettingsParamList> | undefined;
  SingleBook: { id: string };
  Checkout: undefined;
  Auth: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Browse: undefined;
  Cart: undefined;
  Search: undefined;
  Library: undefined;
  Account: undefined;
  SingleBook: undefined;
  Checkout: undefined;
  Profile: undefined;
  Auth: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type SettingsParamList = {
  Settings: undefined;
  Profile: undefined;
  Order: undefined;
  Address: undefined;
  Favorite: undefined;
  Review: undefined;
  Payment: undefined;
  Notification: undefined;
  Help: undefined;
  About: undefined;
  Contact: undefined;
  Privacy: undefined;
  Term: undefined;
  Refund: undefined;
  ChangePassword: undefined;
  NotFound: undefined;
};
