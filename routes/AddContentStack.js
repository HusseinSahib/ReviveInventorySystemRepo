import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import LoginScreen from '../screens/LoginScreen';
import ForgotPassword from '../screens/ForgotPassword';
import CreateAccount from '../screens/CreateAccount';
import DashboardStack from './DashboardStack';
import AddContent from '../screens/AddContent';
import HomeScreen from '../screens/HomeScreen';




const Stack = createStackNavigator();

function AddContentStack() {
    console.log('hi');
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DashboardStack}/>
      <Stack.Screen name="Forgot Password" component={AddContent}/>
    </Stack.Navigator>
  );
}

export default AddContentStack