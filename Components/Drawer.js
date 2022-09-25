import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import About from "./About";
import Survey from "./Survey";
import Input from "./Input";
import DataPage from "./DataPage";
import Footer from "./Footer";
import SingleData from "./SingleData";
import Geographical from "./questionForm/Geographical";
import Cultural from "./questionForm/Cultural";
import Other from "./questionForm/Other";

const Drawerr = createDrawerNavigator();

export default function Drawer() {
  return (
    <Drawerr.Navigator initialRouteName="Home">
      <Drawerr.Screen
        name="Home"
        component={Home}
        options={{
          title: "Village Knowledege Center",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#dff8f8",
          },
        }}
      />
      <Drawerr.Screen
        name="Survey"
        component={Survey}
        options={{ title: "Survey", headerShown: false }}
      />
      <Drawerr.Screen
        name="Form"
        component={Input}
        options={{ title: "Form", headerShown: false }}
      />
      <Drawerr.Screen
        name="Data"
        options={{ title: "Form-Data", headerShown: false }}
        component={DataPage}
      />
      <Drawerr.Screen
        name="About"
        options={{ title: "Form-Data", headerShown: false }}
        component={About}
      />
      <Drawerr.Screen
        name="Footer"
        options={{ title: "Form-Data", headerShown: false }}
        component={Footer}
      />
      <Drawerr.Screen
        name="SingleData"
        options={{ title: "Form-Data", headerShown: false }}
        component={SingleData}
      />
      <Drawerr.Screen
        name="Geographical"
        options={{ title: "Form-Data", headerShown: false }}
        component={Geographical}
      />
      <Drawerr.Screen
        name="Cultural"
        options={{ title: "Form-Data", headerShown: false }}
        component={Cultural}
      />
      <Drawerr.Screen
        name="Other"
        options={{ title: "Form-Data", headerShown: false }}
        component={Other}
      />
    </Drawerr.Navigator>
  );
}
