import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { authentication } from '../firebase/Config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebase/Config';
import { collection, setDoc ,getDoc, doc, updateDoc  } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import { StackActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditContact = ({route, navigation}) => {
    const { user, num, desc} = route.params;
    //const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    //setDescription(desc);
    //setPhone(num);
    const CreateItem = async () => {
        const docRef = doc(db, "Contacts", user);
            await updateDoc(docRef, {
                itemDescription: description,
                itemPhone: phone
            });
            navigation.dispatch(StackActions.pop(1));
          
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder= {user}
                    value={user}
                    style={styles.input}

                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={desc}
                    value={description}
                    style={styles.input}
                    onChangeText={text => setDescription(text)}

                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={num}
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
                    <Text styles={styles.buttonOutlineText}>Save Changes</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default EditContact

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#6f4e37',
        alignItems: 'center',
        justifyContent: 'center',
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
        padding:20
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
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40

    },
    button: {
        width:"80%",
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

})

