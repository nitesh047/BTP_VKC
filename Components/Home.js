import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    ScrollView,
    Alert,
    Pressable,
    View,
} from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Footer from './Footer';

const Home = ({ navigation }) => {
    return (
        <ScrollView
            style={{ backgroundColor: '#f0f8ff' }}
        >
            {/* <Text> Home</Text> */}
            <Card containerStyle={{ backgroundColor: '#fff' }}>
                <Card.Title  >FILL A SURVEY</Card.Title>
                <Card.Divider />
                <Card.Image source={require('../assets/download.jpeg')} />
                <Text style={{ marginBottom: 10 }}>
                    Village Knowledge Center (VKC) will collect the information on the following aspects:
                    Traditional Knowledge of Villagers, cultural heritage practices such as Traditional folk
                    medicine, cultural heritage  etc.
                </Text>
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("Form");
                    }}
                >

                    <Text style={styles.text}>FILL NOW</Text>
                </Pressable>

            </Card>
            <Card>
                <Card.Title >COLLECTED SURVEY DATA</Card.Title>
                <Card.Divider />
                <Card.Image source={require('../assets/data.jpg')} />
                <Text style={{ marginBottom: 10 }}>
                    Village Knowledge Center (VKC) will collect the information on the following aspects:
                    Traditional Knowledge of Villagers, cultural heritage practices such as Traditional folk
                    medicine etc.
                </Text>
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("Data");
                    }}
                >

                    <Text style={styles.text}>SEE THE DATA</Text>
                </Pressable>

            </Card>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#000",

    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#f0f8ff",
        width: "100%",
        marginTop: 15,
    },
})

export default Home