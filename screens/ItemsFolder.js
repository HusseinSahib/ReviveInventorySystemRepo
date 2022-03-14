import { NavigationContainer } from '@react-navigation/native';
import {useState, useEffect,React} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { authentication } from '../firebase/Config';
import DashboardStack from '../routes/DashboardStack';
import { updateDoc } from 'firebase/firestore';
import LoginStack from '../routes/LoginStack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, ScrollView,View, StatusBar,TouchableOpacity} from 'react-native';
//
import { db } from '../firebase/Config';
import {collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
import { Button, YellowBox } from 'react-native-web';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { render } from 'react-dom';
import props from 'prop-types';
import { deleteDoc } from "firebase/firestore";


const deleteitem = async (item) =>{
  await deleteDoc(doc(db, "Items", item));
}
const updateItem = async (item, quantity) =>{
  const docRef = doc(db, "Items", item.itemName);
    await updateDoc(docRef, {
        itemQuantity: parseFloat(quantity),
    });
}

function ItemsFolder() {
  const [quantity, setQuantity] = useState('');
  const navigation = useNavigation()
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
        <View>
            <View style={styles.container}> 
            <Text style={styles.label}>{item.itemName}</Text>
            <Text style={styles.description}>Item description: {item.itemDescription}</Text>
            <Text style={styles.description}>Amount left: {item.itemQuantity} {item.itemUnit}</Text>
            <Text style={styles.description}>Amount minimum requirment: {item.itemMinQuantity}</Text>
            
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="update item quantity"
                    value={quantity}
                    style={styles.button}
                    onChangeText={text => setQuantity(text)}
                />
            </View>
            <View style={styles.row}>
            <View><Text>  </Text></View>
              <TouchableOpacity
                  onPress={() => updateItem(item,quantity)}
              >
                  <Text style={styles.button}>Update Quantity</Text>
              </TouchableOpacity>
              <Text>  </Text>
              <TouchableOpacity
                  onPress={()=>deleteitem(item.itemName)}
              >
                  <Text style={styles.button}>delete Item</Text>
              </TouchableOpacity>
            </View>
            <View><Text>  </Text></View>
            </View>
        </View>
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

export default ItemsFolder;


