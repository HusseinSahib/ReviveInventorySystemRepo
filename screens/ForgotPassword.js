import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { authentication } from '../firebase/Config'
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const PasswordReset = () => {
      sendPasswordResetEmail(authentication, email)
      .then(() => {
        alert("password email has been sent, if the email address you entered is correct.");
        navigation.dispatch(StackActions.pop(1));
        window.location.reload(false);
      })
      .catch((error) => {
        alert("password email has been sent, if the email address you entered is correct.");
        navigation.dispatch(StackActions.pop(1));
        window.location.reload(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
        
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Text>Enter Your email address and we will send you a password reset email. Make sure there are no empty spaces before or after you email address</Text>
            <Text> </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    style={styles.input}
                    onChangeText={text => setEmail(text)}

                />
            </View>
            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    onPress={PasswordReset}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text styles={styles.buttonOutlineText}>Send Password reset Email</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

export default ForgotPassword

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

