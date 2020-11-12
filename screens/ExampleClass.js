import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import NavBar from "../components/navBar";
import Assignment from "../components/assignment";
import DATA from "../data/classes";

function ExampleClass({ navigation, route }) {
  const { name } = route.params;
  const data = DATA.find((el) => el.title == name).assignments;
  const colorList = ["red", "green", "blue"];
  const renderItem = ({ item, index }) => (
    <Assignment
      assignmentTitle={item.title}
      assignmentDueDate={item.dueDate}
      assignmentGrade={item.grade}
      newColor={colorList[index]}
    />
  );
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={styles.main}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </View>
      <NavBar navigation={navigation} Directory="Example Class" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 20,
  },
  main: {
    backgroundColor: "grey",
  },
});

export default ExampleClass;
