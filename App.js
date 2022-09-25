// import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";

import { Header } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,

} from "react-native";
import Input from "./Components/Input";

import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DataPage from "./Components/DataPage";
import Home from "./Components/Home";
import About from "./Components/About";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Footer from "./Components/Footer";
import SingleData from "./Components/SingleData";
// import Drawer from "./Components/Drawer";




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>

        {/* <Drawer /> */}
        <Header
          style={{ marginTop: '20px', }}
          backgroundColor="#dff8f8"
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly
          leftComponent={{ icon: 'menu', color: '#000' }}
          centerComponent={{ text: 'Village Knowledge Center', style: { color: '#000', fontSize: 18 } }}
        // rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home", headerShown: false }}

          />
          <Stack.Screen
            name="Form"
            component={Input}
            options={{ title: "Form", headerShown: false }}

          />
          <Stack.Screen
            name="Data"
            options={{ title: "Form-Data", headerShown: false }}
            component={DataPage}
          />
          <Stack.Screen
            name="About"
            options={{ title: "Form-Data", headerShown: false }}
            component={About}
          />
          <Stack.Screen
            name="Footer"
            options={{ title: "Form-Data", headerShown: false }}
            component={Footer}
          />
          <Stack.Screen
            name="SingleData"
            options={{ title: "Form-Data", headerShown: false }}
            component={SingleData}
          />

        </Stack.Navigator>

        <StatusBar style="auto" />

        {/* <Footer /> */}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
  },
  title: {
    fontSize: 28,
    marginTop: 20,
    fontWeight: "500",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#313131",
    width: "100%",
    marginTop: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
