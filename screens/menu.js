import React from "react";
import { Text, View, StyleSheet } from "react-native";

function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>this is another thing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
  },
});

export default NotificationsScreen;
