import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

interface Props {
  navigation: NavigationProp<any, any>;
}

export default function List({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => FIREBASE_AUTH.signOut()}
      >
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Màu nền của container
  },
  input: {
    width: "80%", // Độ rộng của TextInput là 80% chiều rộng của parent
    height: 50, // Chiều cao của TextInput
    backgroundColor: "#ffffff", // Màu nền của TextInput
    borderWidth: 1, // Độ dày của viền TextInput
    borderColor: "#ccc", // Màu viền TextInput
    borderRadius: 8, // Độ bo tròn của góc
    paddingHorizontal: 16, // Khoảng cách giữa nội dung và viền bên trái/phải
    marginTop: 10, // Khoảng cách từ TextInput đến phần tử phía trên
    fontSize: 16, // Kích cỡ chữ của nội dung trong TextInput
  },
  button: {
    width: "80%",
    backgroundColor: "#007bff",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
