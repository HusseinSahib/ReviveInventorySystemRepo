import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import LoginScreen from '../screens/LoginScreen';
import ForgotPassword from '../screens/ForgotPassword';
import CreateAccount from '../screens/CreateAccount';
import MenuStack from './MenuStack';
import AddContact from '../screens/AddContact';
import AddItem from '../screens/AddItem';
import AddNote from '../screens/AddNote';
import EditContact from '../screens/EditContact';
import EditItem from '../screens/EditItem';
import EditNotes from '../screens/EditNotes';





const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Main Menue" component={MenuStack}/>
      <Stack.Screen name="Add Contact" component={AddContact} />
      <Stack.Screen name="Add Item" component={AddItem} />
      <Stack.Screen name="Add Note" component={AddNote} />
      <Stack.Screen name="Edit Contact" component={EditContact} />
      <Stack.Screen name="Edit Item" component={EditItem} />
      <Stack.Screen name="Edit Notes" component={EditNotes} />
    </Stack.Navigator>
  );
}

export default MainStack