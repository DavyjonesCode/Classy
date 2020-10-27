import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Assignment = ({ title, grade, dueDate }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{dueDate}</Text>
      <Text>{grade}</Text>
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
