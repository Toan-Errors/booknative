/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: "home",
            },
          },
          Browse: {
            screens: {
              BrowseScreen: "browse",
            },
          },
          SingleBook: {
            screens: {
              SingleBook: "single-book",
            },
          },
        },
      },
      Auth: {
        screens: {
          Login: "login",
          Register: "register",
        },
      },
      Settings: {
        screens: {
          Profile: "profile",
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
