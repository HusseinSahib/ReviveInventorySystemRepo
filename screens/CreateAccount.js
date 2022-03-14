import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View } from 'react-native'
import { authentication } from '../firebase/Config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebase/Config';
import { collection, getDocs,getDoc, doc } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [secretPass, setSecretPass] = useState('');

    const signUp = async () => {
            const collection =  doc(db,'Password', 'XBCGxqMh3jM9s5ko00lV');
            const document = await getDoc(collection);
            const passcode = document.data().code;
            if (passcode === secretPass){
                createUserWithEmailAndPassword(authentication, email, password)
                .then((re) => {
                    re.user.updateProfire({
                        displayName: state.displayName
                    })
                })
                .catch((re) => {
                    console.log(re.message);
                })
            }
            else{
                alert('wrong password');
            }
        
    }

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    style={styles.input}
                    onChangeText={text => setEmail(text)}

                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter your full name"
                    value={displayName}
                    style={styles.input}
                    onChangeText={text => setDisplayName(text)}

                />
            </View>
            <View>
            <Text style={{alignItems:'center'}}>     Enter password to verify that you are an employee</Text>
            <Text> </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Passcode"
                    value={secretPass}
                    style={styles.input}
                    onChangeText={text => setSecretPass(text)}

                />
            </View>
            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    onPress={signUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text styles={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default CreateAccount


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