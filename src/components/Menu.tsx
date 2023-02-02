import { Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";

export default class Menu extends Component {
  render() {
    return (
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#e0e0e0",
            paddingBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Book Store</Text>
        </View>
        <View
          style={{
            borderBottomColor: "#e0e0e0",
            borderBottomWidth: 1,
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          {/* Menu mobile */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>
              <Ionicons name="menu" size={24} color="black" />
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                Duyệt Các Thể Loại
              </Text>
            </Text>
            <Text style={{ fontSize: 16 }}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
