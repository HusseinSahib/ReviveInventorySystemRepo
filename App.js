import 'react-native-gesture-handler';
import * as react from 'react';//this
import React, { useState, useEffect } from 'react';
import { authentication } from './firebase/Config'
import { NavigationContainer } from '@react-navigation/native';//this
//screens
import LoginStack from './routes/LoginStack';
import MenuStack from './routes/MenuStack';
import DashboardStack from './routes/DashboardStack';
import MainStack from './routes/MainStack';


function App() {
  ///////////////////////////////////
  //Firebase authentication
  //////////////////////////////////

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = authentication.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  //if user is not logged in
  if (!user) {
    
    return (
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    );
  }
  //if a user is logged in
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
  ///////////////////////////////////
}

export default App;
