import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Main from "./screens/main";
import Menu from "./screens/menu";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="Menu" component={Menu} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
