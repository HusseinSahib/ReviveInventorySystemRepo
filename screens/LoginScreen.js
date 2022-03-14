import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { authentication } from '../firebase/Config'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from "firebase/auth";



const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    const Login = () => {
        //auth/invalid-email
        //auth/email-already-in-use
        //auth/wrong-password
        signInWithEmailAndPassword(authentication, email, password)
            .then((re) => {
                    console.log('test - Wrong password or email, Check for extra spaces before or after the email or password');
                
            })
            .catch((re) => {
                    alert("Wrong password or email, Check for extra spaces before or after the email or password");
            })
    }

    return (
        <View style={styles.container}>
            <Image
                style={{ width: 200, height: 200 }}
                source={require('../assets/Logo.jpg')}
            />
            <View><Text> </Text></View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    textAlign={'center'}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                    textAlign={'center'}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Forgot Password')}
            >
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    onPress={Login}
                    style={styles.button}
                >
                    <Text styles={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Create Account')}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text styles={styles.buttonOutlineText}>Create a New Account</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#704D31',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#ffffff",
        marginBottom: 40
    },
    inputContainer: {
        width: "80%",
        backgroundColor: "#ffffff",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    input: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40

    },
    button: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
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
