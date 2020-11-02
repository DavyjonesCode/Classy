import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ClassCard from "../components/classCard";
import NavBar from "../components/navBar";



function HomeScreen({ navigation }) {
  return (
    <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>

      <View style={styles.container}>
        <View style={styles.classcard}>
          <ClassCard />
          <ClassCard />
        </View>
        <NavBar/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    backgroundColor: "#111028",
    flex: 1,
  },
  classcard: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  navbar:{
    flexDirection: 'column',


  }
})

export default Main;
