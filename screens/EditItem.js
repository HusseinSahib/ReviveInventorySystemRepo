import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { authentication } from '../firebase/Config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebase/Config';
import { collection, setDoc ,getDoc, doc, updateDoc } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import { StackActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditItem = ({route, navigation}) => {
    const { itemDescription, itemName, itemQuantity,itemMinQuantity, itemUnit} = route.params.vari;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [unit, setUnit] = useState('');
    const [quantity, setQuantity] = useState('');
    const [minquantity, setMinquantity] = useState('');

    const CreateItem = async () => {
        const docRef = doc(db, "Items", itemName);
            await updateDoc(docRef, {
                itemQuantity: parseFloat(quantity),
            });
            navigation.dispatch(StackActions.pop(1));
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <View><Text>  </Text></View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={itemName}
                    value={itemName}
                    style={styles.input}

                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={itemDescription}
                    value={itemDescription}
                    style={styles.input}

                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={itemQuantity}
                    value={quantity}
                    style={styles.input}
                    onChangeText={text => setQuantity(text)}

                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={itemMinQuantity}
                    value={itemMinQuantity}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={itemUnit}
                    value={itemUnit}
                    style={styles.input}
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

export default EditItem

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

