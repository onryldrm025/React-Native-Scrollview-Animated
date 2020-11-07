/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import 'react-native-gesture-handler';
 import {createStackNavigator} from '@react-navigation/stack';
 import {NavigationContainer} from '@react-navigation/native';
 import { Text, View, StyleSheet } from 'react-native';

 import {OnBoarding} from './app/screens'
 

 const Stack = createStackNavigator();
 
 const App= () => {
     return (
       <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen  name='OnBoarding' component={OnBoarding} options={{headerShown:false}} />
         </Stack.Navigator>
         


       </NavigationContainer>
         

     )
 }
 const styles = StyleSheet.create({
     container: {
         flex: 1,
     },
 })
 export default App;
