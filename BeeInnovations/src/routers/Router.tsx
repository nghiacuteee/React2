

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import HomeScreen from '../screens/homes/HomeScreen';
import AddNewTask from '../screens/tasks/AddNewTask';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';
import auth from '@react-native-firebase/auth';
import BmiCalculatorScreen from '../screens/BmiCalculatorScreen';
import BmiResultScreen from '../screens/BmiResultScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from '../navigators/TabNavigator';
import { ScreenName } from '../types/ScreenName';
const Router = () => {
    const [isLogin, setIsLogin] = useState(false);

    const Stack = createNativeStackNavigator();
    const AppStack = createNativeStackNavigator();
    const MainNavigator = (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AddNewTask" component={AddNewTask} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        
          
        </Stack.Navigator>
    );

    const AuthNavigator = (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );

    <AppStack.Navigator
    >
        <AppStack.Screen
            name={ScreenName.BMI_CALCULATOR}
            component={BmiCalculatorScreen}
          
        />
        <AppStack.Screen
            name={ScreenName.BMI_RESULT}
            component={BmiResultScreen}
            options={{
                title: 'BMI Result',
            }}
        />
    </AppStack.Navigator>

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            if (user) {
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        });
    }, []);

    return isLogin ? MainNavigator : AuthNavigator;
};

export default Router;
