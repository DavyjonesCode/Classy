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
        <Text>{assignmentTitle}</Text>
        <Text>{assignmentDueDate}</Text>
        <Text>{assignmentGrade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
});

export default Assignment;
