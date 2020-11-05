import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ClassCard from "../components/classCard";
import NavBar from "../components/navBar";
import DATA from "../data/classes";

function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.classcard}>
        <ClassCard classTitle={DATA[0].title} classGrade={DATA[0].grade} />
        <ClassCard classTitle={DATA[1].title} classGrade={DATA[1].grade} />
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111028",
    flex: 1,
  },
  classcard: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  navbar: {
    flexDirection: "column",
  },
});

export default Main;
