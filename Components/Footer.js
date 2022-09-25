import React from 'react'
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,

    Alert,
    Pressable,
    View,
} from "react-native";

const Footer = () => {
    const navigation = useNavigation();


    return (
        <Header
            backgroundColor="#C1FFD7"
            placement="center"
            leftComponent={{ text: 'Home', style: { color: '#000' }, onPress: () => { navigation.navigate("Home") } }}
            centerComponent={{ text: ' VKC Version  1 . 0 . 0', style: { color: '#000' } }}
            rightComponent={{ text: 'About', style: { color: '#000' }, onPress: () => { navigation.navigate("About") } }}
        />


    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",

    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
        width: "100%",
        marginTop: 15,
    },
})


export default Footer