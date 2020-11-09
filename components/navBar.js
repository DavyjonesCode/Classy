import React from "react";
import { View, Text, StyleSheet} from "react-native";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const NavBar = ({ navigation, Directory }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="left"
        size={35}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>{Directory}</Text>
      <MaterialCommunityIcons
        name="menu"
        size={35}
        color="white"
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111028",
    bottom: 0,
    position: "absolute",
    width: "100%",
    height: 60,
    borderTopColor: "white",
    borderTopWidth: 3,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
});

export default NavBar;
