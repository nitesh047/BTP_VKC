import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import About from "./About";


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
        name="About"
        options={{
          title: "About", headerShown: true,
          headerStyle: {
            backgroundColor: "#dff8f8",
          },
        }}
        component={About}
      />
      {/* <Drawerr.Screen
        style={{
          position: "absolute", bottom: "0", marginTop: 20
        }}
        name="V 1.0.0"
        // options={{
        //   title: "About", headerShown: true,
        //   headerStyle: {
        //     backgroundColor: "#dff8f8",
        //   },
        // }}
        component={About}
      /> */}

    </Drawerr.Navigator>
  );
}
