import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homes/HomeScreen';
import BmiCalculatorScreen from '../screens/BmiCalculatorScreen';
import BmiResultScreen from '../screens/BmiResultScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RouteProp } from '@react-navigation/native';
import AddNewTask from '../screens/tasks/AddNewTask';
import Setting from '../screens/Setting';
type TabParamList = {
    Home: undefined;
    'BMI Calculator': undefined;
    'Add': undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }: { route: RouteProp<TabParamList, keyof TabParamList> }) => ({
                tabBarIcon: ({ color, size }: { color: string; size: number }) => {
                    let iconName: string = '';  // Initialize with an empty string

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'BMI Calculator') {
                        iconName = 'calculator';
                    } else if (route.name === 'Add') {
                        iconName = 'settings';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,  // Add this line to hide the header
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen as React.ComponentType} />
            <Tab.Screen name="BMI Calculator" component={BmiCalculatorScreen as React.ComponentType} />
            <Tab.Screen name="Add" component={Setting as React.ComponentType} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
