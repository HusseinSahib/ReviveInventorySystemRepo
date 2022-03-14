import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import LoginScreen from '../screens/LoginScreen';
import ForgotPassword from '../screens/ForgotPassword';
import CreateAccount from '../screens/CreateAccount';




const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login Screen" component={LoginScreen}
      options={{headerShown: false}}/>
      <Stack.Screen name="Forgot Password" component={ForgotPassword}
      options={{
        title: 'Forogt Password',
        headerStyle: {
          backgroundColor: '#6f4e37',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      <Stack.Screen name="Create Account" component={CreateAccount}
      options={{
        title: 'Create Account',
        headerStyle: {
          backgroundColor: '#6f4e37',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      />
      
    </Stack.Navigator>
  );
}

export default LoginStack