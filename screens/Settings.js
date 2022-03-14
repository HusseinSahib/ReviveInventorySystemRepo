import { StyleSheet, Text, View,Button } from 'react-native';
import React from 'react';
import { authentication } from '../firebase/Config'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { deleteUser } from "firebase/auth";
const Settings = () => {
  function deleteAccount() {
    const user = authentication.currentUser;
    deleteUser(user).then(() => {
      alert("user deleted successfully");
    }).catch((error) => {
      alert("Please signout and sign back in to reauthorize");
    });
}
  return (
    <View >
    
          <View />
          <Button
            onPress={() => deleteAccount()}
            title = 'Confirm deleting account'
          />
          </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
