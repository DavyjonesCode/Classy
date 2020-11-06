import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import NavBar from "../components/navBar";
import Assignment from "../components/assignment";
import DATA from "../data/classes";

function ExampleClass({ navigation }) {
  const renderItem = ({ item }) => (
    <Assignment
      assignmentTitle={item.title}
      assignmentDueDate={item.dueDate}
      assignmentGrade={item.grade}
    />
  );
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={styles.main}
          data={DATA.assignments}
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
    alignItems: "center",
  },
  main: {
    backgroundColor: "#00C908",
    height: 100,
    width: 100,
  },
});

export default ExampleClass;
