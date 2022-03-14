import { NavigationContainer } from '@react-navigation/native';
import {useState, useEffect,React} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemsFolder from './ItemsFolder';
import { useNavigation } from '@react-navigation/native';
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


const deleteitem = async (item) =>{
  console.log("hi");
  await deleteDoc(doc(db, "Contacts", item));
}

function Contacts() {
  const navigation = useNavigation()
  const[notesArray, setNotesArray] = useState([]);
  useEffect(()=>{
    onSnapshot(collection(db,"Contacts"), (snapshot)=>{
      setNotesArray(snapshot.docs.map((doc) =>({...doc.data()})))
    });
  },[])
  return(
    <ScrollView style={ {backgroundColor:"#98785c"}}>
      {notesArray.map((contact) => {
      return (
        <SafeAreaView>
            <View style={styles.container}> 
            <Text style={styles.label}>{contact.itemName}</Text>
            <Text style={styles.label}>{contact.itemPhone}</Text>
            <Text style={styles.description}>{contact.itemDescription}</Text>
            
            
            <View style={styles.row}>
              <TouchableOpacity
                  onPress={() => navigation.navigate("Edit Contact",{user:contact.itemName, num:contact.itemPhone, desc:contact.itemDescription})}
              >
                  <Text style={styles.button}>edit</Text>
              </TouchableOpacity>
              <Text>  </Text>
              <TouchableOpacity
                  onPress={()=>deleteitem(contact.itemName)}
              >
                  <Text style={styles.button}>delete</Text>
              </TouchableOpacity>
            </View>
            <View><Text>  </Text></View>
            </View>
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

export default Contacts;


