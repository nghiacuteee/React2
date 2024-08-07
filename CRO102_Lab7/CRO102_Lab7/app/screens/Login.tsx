import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  User,
} from "@react-native-google-signin/google-signin";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface UserInfo {
  id: string;
  name: string;
  email: string;
  // Các thuộc tính khác của userInfo
}
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const auth = FIREBASE_AUTH;

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        "408872883599-ushmq7ldov4i63tu5s6mcgr0a4fq5m1v.apps.googleusercontent.com",
    });
  };

  useEffect(() => {
    configureGoogleSignIn();
  });

  //  const signIn = async () => {
  //    try {
  //      await GoogleSignin.hasPlayServices();
  //      const user: User = await GoogleSignin.signIn();
  //      const { id, name, email } = user; // Lấy thông tin từ user đăng nhập
  //      const userInfo: UserInfo = { id, name, email };
  //      setUserInfo(userInfo);
  //    } catch (error) {
  //      console.error("Google sign in error:", error);
  //      Alert.alert("Google sign in failed:", error.message);
  //    }
  //  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Invalid Input", "Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      console.log("User Logged in");
    } catch (error) {
      setLoading(false);
      Alert.alert("Login Failed" + error);
    }
  };

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert("Invalid Input", "Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      Alert.alert("Success", "User Created Successfully");
    } catch (error) {
      setLoading(false);
      Alert.alert("Sign Up Failed " + error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ marginTop: 20 }}
        />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </>
      )}
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
