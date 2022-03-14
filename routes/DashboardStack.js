import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import Notes from '../screens/Notes';
import ItemsFolder from '../screens/ItemsFolder';
import Contacts from '../screens/Contacts';
import HomeScreen from '../screens/HomeScreen';
import Search from '../screens/Search';


const Tab = createBottomTabNavigator();

function DashboardStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15
        },
        tabBarStyle: { position: 'absolute' },
        tabBarIconStyle: { display: "none" },
      }}
    >
        <Tab.Screen options={{headerShown: false}} name="Alerts" component={HomeScreen} />
        <Tab.Screen options={{headerShown: false}} name="Notes" component={Notes} />
        <Tab.Screen options={{headerShown: false}} name="Items" component={ItemsFolder} />
        <Tab.Screen options={{headerShown: false}} name="Contact" component={Contacts} />
    </Tab.Navigator>
  );
}

export default DashboardStack

