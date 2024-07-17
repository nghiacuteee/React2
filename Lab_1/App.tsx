import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThemeProvider from './comp/Theme/ThemeContext';
import PersonalInformation from './sceen/PersonalInformation';
import Courseinformation from './sceen/Courseinformation';
import ContactInfo from './sceen/ContactInfo';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Tab.Navigator initialRouteName='Profile'>
              <Tab.Screen name='Profile' component={PersonalInformation}options={{headerShown:false}}/>
              <Tab.Screen name='Course' component={Courseinformation} options={{headerShown:false}}/>
              <Tab.Screen name='Contact' component={ContactInfo} options={{headerShown:false}}/>
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
    </ThemeProvider>
   
      
     
      
  )
}

export default App

const styles = StyleSheet.create({})