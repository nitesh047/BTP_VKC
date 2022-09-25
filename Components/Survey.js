import React from 'react'
import { SearchBar, ListItem, Avatar, Icon, Card, } from 'react-native-elements';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    ScrollView,
    Pressable,
    View,
    Text
} from "react-native";

function Survey({ navigation }) {
    return (
        <SafeAreaView>
            <Card containerStyle={{ backgroundColor: '#fff' }}>
                <Card.Title  >SURVEY OF VILLAGE</Card.Title>
                <Card.Divider />
                <Card.Image source={require('../assets/download.jpeg')} />
                <Text style={{ marginBottom: 10 }}>
                    Village Knowledge Center (VKC) is a concept created by using the three words Village,
                    Knowledge and Centre. The VKC is as a Centre for introducing the unique traditional
                    knowledge of the villagers to the new generation and the other as a Centre for imparting new
                    knowledge on various subjects to the villagers on various aspects of their daily lives.

                </Text>
            </Card>
            <Text></Text>

            <ListItem
                style={{ padding: 10 }}
                bottomDivider onPress={() => {
                    navigation.navigate("Form");
                }}>
                <ListItem.Content>
                    <ListItem.Title>Basic Question About Village</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem style={{ padding: 10 }} bottomDivider onPress={() => {
                navigation.navigate("Geographical");
            }}>
                <ListItem.Content>
                    <ListItem.Title>Geographical Question About Village</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem style={{ padding: 10 }} bottomDivider onPress={() => {
                navigation.navigate("Cultural");
            }}>
                <ListItem.Content>
                    <ListItem.Title>Cultural Question About Village</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem style={{ padding: 10 }} bottomDivider onPress={() => {
                navigation.navigate("Other");
            }}>
                <ListItem.Content>
                    <ListItem.Title>Other Questions About Village</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

        </SafeAreaView>
    )
}



export default Survey
