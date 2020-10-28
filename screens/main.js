import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ClassCard from "../components/classCard";
import NavBar from "../components/navBar"

const screen = () => {
  return (
    <View style={styles.container}>
      <ClassCard />
      <ClassCard />
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    backgroundColor: "#111028",
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
})

export default screen;
