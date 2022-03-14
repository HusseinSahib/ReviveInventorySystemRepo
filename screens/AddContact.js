import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { authentication } from '../firebase/Config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebase/Config';
import { collection, setDoc ,getDoc, doc } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import { StackActions } from '@react-navigation/native';

const AddContact = ({navigation}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');

    const CreateItem = async () => {
        const docRef = doc(db, "Contacts", name);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            alert("Item already exisits please change the name or edit the existing item");
          } else {
            await setDoc(doc(db, "Contacts", name), {
                itemName: name,
                itemDescription: description,
                itemPhone: phone
            });
            alert('Item added successfully, you will be redirected')
            navigation.dispatch(StackActions.pop(1));
            window.location.reload(false);
          }
    }

    return (
        <KeyboardAvoidingView
        style={styles.container}
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Contact Name"
                    value={name}
                    style={styles.input}
                    onChangeText={text => setName(text)}

                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Contact Discription"
                    value={description}
                    style={styles.input}
                    onChangeText={text => setDescription(text)}

                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Phone number"
                    value={phone}
                    style={styles.input}
                    onChangeText={text => setPhone(text)}

                />
            </View>
            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    onPress={CreateItem}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text styles={styles.buttonOutlineText}>Create Item</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

export default AddContact

const styles = StyleSheet.create({
    container: {
        paddingTop:22,
        flex: 1,
        backgroundColor: '#6f4e37',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#ffffff",
        marginBottom:40
      },
    inputContainer: {
        width:"80%",
        backgroundColor:"#ffffff",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        marginLeft: 50,
        marginRight: 50
    },
    input: {
        height:50,
        color:"black"
    },
    forgot:{
        color:"white",
        fontSize:11
      },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40

    },
    button: {
        width:"100%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    }

});