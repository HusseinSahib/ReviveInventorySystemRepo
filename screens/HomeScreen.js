import { NavigationContainer } from '@react-navigation/native';
import {useState, useEffect,React} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notes from './Notes';
import ItemsFolder from './ItemsFolder'
import Contacts from './Contacts';
import { authentication } from '../firebase/Config';
import DashboardStack from '../routes/DashboardStack';
import LoginStack from '../routes/LoginStack';
import { StyleSheet, Text, SafeAreaView, ScrollView,View, StatusBar,TouchableOpacity} from 'react-native';
//
import { db } from '../firebase/Config';
import {collection, doc, getDocs, onSnapshot} from 'firebase/firestore';
import { Button, YellowBox } from 'react-native-web';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { render } from 'react-dom';
import { deleteDoc } from "firebase/firestore";


const searchitem =  (name,item,itemMin) =>{
  if(item<=itemMin){
    return(
      <View style={styles.container}> 
            <Text style={styles.label}>{name}</Text>
            <Text style={styles.description}>only {item} remaining of {name}</Text>
      </View>
    );
  }
}

function HomeScreen() {

  const[notesArray, setNotesArray] = useState([]);
  useEffect(()=>{
    onSnapshot(collection(db,"Items"), (snapshot)=>{
      setNotesArray(snapshot.docs.map((doc) =>({...doc.data()})))
    });
  },[])
  return(
    <ScrollView style={{backgroundColor:"#98785c"}}>
      {notesArray.map((item) => {
      return (
        <SafeAreaView>
          {searchitem(item.itemName,item.itemQuantity,item.itemMinQuantity)}    
        </SafeAreaView>
      );
    
    })}
    </ScrollView>
  );
  
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:8,
    padding: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    textAlign: "center",
    backgroundColor:"#fce5cd",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  row: {
    flexDirection:"row",
    flex:1,
    alignSelf: "center",
    paddingBottom:5,
  },
  label: {
    flex:2,
    textAlign: "center",
    marginBottom: 10,
    fontSize: 32,
  },
  description: {
    flex:1,
    textAlign:'left',
    marginBottom: 10,
    fontSize: 16,
  },

});

export default HomeScreen;


