import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import ClassCard from "../components/classCard";
import NavBar from "../components/navBar";
import DATA from "../data/classes";

function Main({ navigation }) {
  const renderItem = ({ item }) => (
    <ClassCard
      classTitle={item.title}
      classGrade={item.grade}
      assignments={item.assignments}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.classcard}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
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
