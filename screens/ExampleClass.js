import React from "react";
import {View, Text, StyleSheet, FlatList } from "react-native";

import NavBar from "../components/navBar";
import Assignment from "../components/assignment";
import DATA from "../data/classes";


function ExampleClass({ navigation, route }) {
  const {name} = route.params
  const data = DATA.find(el => el.title == name).assignments
  
  const renderItem = ({ item }) => (
    <Assignment
      assignmentTitle={item.title}
      assignmentDueDate={item.dueDate}
      assignmentGrade={item.grade}
      newColor={"green"}
      id={item.id}
    />
  );
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
        />
      </View>
      <NavBar navigation={navigation} Directory="Example Class"/>
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
