import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Assignment = ({
  assignmentDueDate,
  assignmentGrade,
  assignmentTitle,
  newColor,
  id,
}) => {
  return (
    <View style={{ paddingVertical: 7 }}>
      <View
        style={{ ...styles.container, backgroundColor: newColor || "#B2EFB5" }}
      >
        <Text numberOfLines="1" style = {{flex: 1, textAlign: "left"}} >{assignmentTitle}</Text>
        <Text style = {{flex: 1, textAlign: 'center'}}>{assignmentDueDate}</Text>
        <Text style = {{flex: 1, textAlign: 'right'}}>{assignmentGrade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    //justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
});

export default Assignment;
