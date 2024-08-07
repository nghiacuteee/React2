import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homes/HomeScreen';
import BmiCalculatorScreen from '../screens/BmiCalculatorScreen';
import Setting from '../screens/Setting';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RouteProp } from '@react-navigation/native';
import { ColorSchemeName, useColorScheme } from 'react-native';

const getSystemColor = (colorScheme: ColorSchemeName) => {
    return colorScheme === 'dark' ? '#000' : '#fff'; // Dark mode or light mode color for tab bar
};

type TabParamList = {
    Home: undefined;
    'BMI Calculator': undefined;
    'Setting': undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
    const colorScheme = useColorScheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }: { route: RouteProp<TabParamList, keyof TabParamList> }) => ({
                tabBarIcon: ({ color, size }: { color: string; size: number }) => {
                    let iconName: string = '';  // Initialize with an empty string

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'BMI Calculator') {
                        iconName = 'calculator';
                    } else if (route.name === 'Setting') {
                        iconName = 'settings';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: getSystemColor(colorScheme), // Apply system color
                },
                headerShown: false,  // Hide the header
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen as React.ComponentType} />
            <Tab.Screen name="BMI Calculator" component={BmiCalculatorScreen as React.ComponentType} />
            <Tab.Screen name="Setting" component={Setting as React.ComponentType} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
