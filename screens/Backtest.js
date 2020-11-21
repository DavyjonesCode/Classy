import React from "react";
import { View, Text, Button } from "react-native";

import SideBar from "../components/sideBar";
import NavBar from "../components/navBar";

const BackTest = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {/* <SideBar />
      <Button title={"toggle drawer"} onPress={() => onRequestStart} /> */}
      <NavBar navigation={navigation} Directory="Backtest" />
    </View>
  );
};

export default BackTest;
