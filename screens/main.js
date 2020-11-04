import React from "react";
import { View, StyleSheet } from "react-native";

import ClassCard from "../components/classCard";
import NavBar from "../components/navBar";



function Main({ navigation }) {
  return (
      <View style={styles.container}>
        <View style={styles.classcard}>
          <ClassCard />
          <ClassCard />
        </View>
        <NavBar/>
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
