import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Assignment = ({
  assignmentDueDate,
  assignmentGrade,
  assignmentTitle,
}) => {
  return (
    <View style={{ paddingVertical: 7 }}>
      <View style={styles.container}>
        <Text>{assignmentTitle}</Text>
        <Text>{assignmentDueDate}</Text>
        <Text>{assignmentGrade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B2EFB5",
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
});

export default Assignment;
