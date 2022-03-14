import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { authentication } from '../firebase/Config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebase/Config';
import { collection, setDoc ,getDoc, doc } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import { StackActions } from '@react-navigation/native';
//import RNRestart from 'react-native-restart';


const AddNote = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const CreateItem = async () => {
        const docRef = doc(db, "Notes", title);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            alert("Note with the same title already exisits please change the name or edit the existing item");
          } else {
            await setDoc(doc(db, "Notes", title), {
                NoteTitle: title,
                NoteDescription: description
            });
            alert('Item added successfully, you will be redirected')
            navigation.dispatch(StackActions.pop(1));
            
        }
        
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Note Title"
                    value={title}
                    style={styles.input}
                    onChangeText={text => setTitle(text)}

                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Your note here"
                    value={description}
                    style={styles.input}
                    onChangeText={text => setDescription(text)}

                />
            </View>
            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    onPress={CreateItem}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text styles={styles.buttonOutlineText}>Add Note</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

export default AddNote

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