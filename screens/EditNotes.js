import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { authentication } from '../firebase/Config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebase/Config';
import { collection, setDoc ,getDoc, doc } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import { StackActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import RNRestart from 'react-native-restart';


const EditNotes = ({navigation}) => {
    
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
        <SafeAreaView
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
        </SafeAreaView>
    )
}

export default EditNotes

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

