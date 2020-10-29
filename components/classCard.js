import React from "react";
import { Text, StyleSheet, View } from "react-native";

import Assignment from "./assignment";

const ClassCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.topBar}>
          <Text style={styles.textOne}>Class name</Text>
          <Text style={styles.textOne}> 100%</Text>
        </View>
        <View style={styles.main}>
          <View>
            <Assignment title="assignment" grade="100%" dueDate="10/27" />
            <Assignment title="assignment" grade="100%" dueDate="10/27" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    backgroundColor: "#077F15",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
   container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  main: {
    backgroundColor: "#00C908",
    height: 150,
    width: "100%",
    padding: 10,
  },
  textOne: {
    fontSize: 25,
  },
});


export default ClassCard