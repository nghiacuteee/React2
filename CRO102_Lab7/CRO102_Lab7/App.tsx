import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Alert,
} from "react-native";
import Login from "./app/screens/Login";
import List from "./app/screens/List";
import Details from "./app/screens/Details";
import React, { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import loginByGoogle from "./app/screens/loginByGoogle";
import LoginByGoogle from "./app/screens/loginByGoogle";
import messaging from "@react-native-firebase/messaging";

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
  }
}

const getToken = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log("Token :  ", token);
};

function Inside() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="My Home" component={List} />
      <InsideStack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: true }}
      />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    requestUserPermission();
    getToken();

    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("User", user);
      setUser(user);
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        {user ? (
          <Stack.Screen
            name="inside"
            component={Inside}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
