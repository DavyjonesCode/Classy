import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Main from "./screens/main";
import ExampleClass from "./screens/ExampleClass";
import BackTest from "./screens/Backtest";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        edgeWidth={25}
        drawerStyle={{
          height: "91%",
          width: "40%",
          flexDirection: "row",
          alignItems: "flex-end",
          paddingVertical: 10,
        }}
        overlayColor={0}
      >
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="ExampleClass" component={ExampleClass} initialParams={{name: "MAD"}} />
        <Drawer.Screen name ="backTest" component={BackTest} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
