import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { authentication } from '../firebase/Config'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { deleteUser } from "firebase/auth";

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import DashboardStack from './DashboardStack';


//screens
import HomeScreen from '../screens/HomeScreen'
import Settings from '../screens/Settings'
import AddContent from '../screens/AddContact';
//sign out
function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Sign Out" onPress={() => {
          authentication
          .signOut()
          .then(console.log("logged out!"));
        }} />
      </DrawerContentScrollView>
    );
  }


const Drawer = createDrawerNavigator();

function MenuStack() {
  const navigation = useNavigation()
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="Home Screen" component={DashboardStack} 
        options={{
          headerTitle: " ",
          headerRight: () => (
            <View style={{flexDirection:"row"}}>
            <Button 
              style = {{marginRight: 20, padding: 30}}
              onPress={() => navigation.navigate('Add Contact')}
              title = 'Add Contact'
            />
             <View style={{width:10}} />
            <Button
            style = {{marginRight: 20, padding: 30}}
            onPress={() => navigation.navigate('Add Item')}
            title = 'Add Item'
          />
          <View style={{width:10}} />
          <Button
            style = {{marginRight: 20, padding: 30}}
            onPress={() => navigation.navigate('Add Note')}
            title = 'Add Note'
          />
          </View>
          ),
          
        }}/>
        <Drawer.Screen name="Delete Account" component={Settings} />

    </Drawer.Navigator>
  );
}

export default MenuStack