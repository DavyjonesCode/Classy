import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Assignment from "./assignment";

const ClassCard = ({ classTitle, classGrade, assignments, navigation }) => {
  const renderItem = ({ item }) => (
    <Assignment
      assignmentTitle={item.title}
      assignmentDueDate={item.dueDate}
      assignmentGrade={item.grade}
    />
  );

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ExampleClass", { name: classTitle })
        }
      >
        <View style={styles.card}>
          <View style={styles.topBar}>
            <Text style={styles.textOne}>{classTitle}</Text>
            <Text style={styles.textOne}> {classGrade}</Text>
          </View>
          <View style={styles.main}>
            <View>
              <FlatList
                data={assignments}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
                style={{ justifyContent: "space-evenly" }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
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

export default ClassCard;
