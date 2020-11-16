import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import NavBar from "../components/navBar";
import Assignment from "../components/assignment";
import DATA from "../data/classes";

function ExampleClass({ navigation, route }) {
  const { name } = route.params;
  const data = DATA.find((el) => el.title == name).assignments;
  const colorList = [
    "#BEB2DA",
    "#B8AAD6",
    "#B2A2D2",
    "#A593CB",
    "#9E8BC7",
    "#9883C4",
    "#917BC0",
    "#8B74BC",
  ];
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
        <FlatList data={data} renderItem={renderItem} />
      </View>
      <NavBar navigation={navigation} Directory= {name} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 20,
  },
});

export default ExampleClass;
