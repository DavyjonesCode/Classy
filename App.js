import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

import Main from "./screens/main";
import ExampleClass from "./screens/ExampleClass";
import BackTest from "./screens/Backtest";
import Login from "./screens/Login";
import Profile from "./screens/Profile";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        drawerPosition="right"
        edgeWidth={30}
        drawerContentOptions={{ labelStyle: { color: "white" } }}
        drawerStyle={{
          height: "91%",
          width: "55%",
          flexDirection: "row",
          alignItems: "flex-end",
          paddingVertical: 10,
          backgroundColor: "#111028",
        }}
        //overlayColor={1}
      >
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerLabel: "Profile",
            drawerIcon: () => (
              <Ionicons
                name="md-person"
                size={30}
                color="white"
                style={{ alignSelf: "flex-start" }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Home"
          component={Main}
          options={{
            drawerLabel: "Home",
            drawerIcon: () => <Entypo name="home" size={30} color="white" />,
          }}
        />
        <Drawer.Screen
          name="ExampleClass"
          component={ExampleClass}
          initialParams={{ name: "MAD" }}
          options={{
            drawerLabel: "Class",
            drawerIcon: () => (
              <MaterialIcons name="class" size={30} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="backTest"
          component={BackTest}
          options={{
            drawerStyle: { backgroundColor: "red" },
            drawerLabel: "BackTest",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="test-tube"
                size={30}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerLabel: "Logout",
            drawerIcon: () => (
              <SimpleLineIcons name="logout" size={30} color="white" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
