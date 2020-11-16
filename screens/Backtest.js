import React from "react";
import { View, Text } from "react-native";

import SideBar from '../components/sideBar'
import NavBar from "../components/navBar";

const BackTest = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text>hello world</Text>
      <SideBar/>
      <NavBar navigation={navigation} Directory="Backtest" />
    </View>
  );
};

export default BackTest;
