// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BmiResultScreen from '../screens/BmiResultScreen';
// import BmiCalculatorScreen from '../screens/BmiCalculatorScreen';
// import { ScreenName } from '../types/ScreenName';

// const AppStack = createNativeStackNavigator();

// const AppNavigator: React.FC = () => {
//     return (
//         <AppStack.Navigator
//             screenOptions={{
//                 headerStyle: {
//                     backgroundColor: '#000', // Set header color to black
//                 },
//                 headerTitleStyle: {
//                     color: 'white', // Set header title color to white
//                 },
//             }}
//         >
//             <AppStack.Screen
//                 name={ScreenName.BMI_CALCULATOR}
//                 component={BmiCalculatorScreen}
//                 options={{
//                     title: 'BMI Calculator',
//                 }}
//             />
//             <AppStack.Screen
//                 name={ScreenName.BMI_RESULT}
//                 component={BmiResultScreen}
//                 options={{
//                     title: 'BMI Result',
//                 }}
//             />
//         </AppStack.Navigator>
//     );
// };

// export default AppNavigator;
