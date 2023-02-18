import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

interface Props {
  style?: any;
}

const Loading = ({ style }: Props) => {
  return <ActivityIndicator style={style} size="large" color="#0000ff" />;
};

export default Loading;

const styles = StyleSheet.create({});
