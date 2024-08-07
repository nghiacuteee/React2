import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/homes/HomeScreen';
import { colors } from './src/constants/colors';
import {
  
  Element4,
  Notification,
 
 
} from 'iconsax-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routers/Router';
// import AppNavigator from './src/navigators/AppNavigator';
const App = () => {
  return (
    <>
     <>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.bgColor}}>
        <StatusBar barStyle="light-content" backgroundColor={colors.bgColor} />
        <NavigationContainer>
          <Router />
            {/* <AppNavigator /> */}
        </NavigationContainer>
      </SafeAreaView>
    </>
    </>
  );
}

const styles = StyleSheet.create({})

export default App;
