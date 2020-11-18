import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import SlidingPanel from "react-native-sliding-panels";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bodyViewStyle}>
          <Text>Hello My World</Text>
        </View>

        <SlidingPanel
          panelPosition="right"
          headerLayoutHeight={1000}
          allowDraging={true}
          useNativeDriver={true}
          headerLayout={() => (
            <View style={styles.headerLayoutStyle}>
              <Text>My Awesome sliding panel</Text>
            </View>
          )}
          slidingPanelLayout={() => (
            <View>
              <Text>The best thing about me is you</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  bodyViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerLayoutStyle: {
    width: 100,
    height,
    backgroundColor: "red",
    justifyContent: "center",
  },
  slidingPanelLayoutStyle: {
    width,
    height,
    backgroundColor: "#7E52A0",
    justifyContent: "center",
    alignItems: "center",
  },
  commonTextStyle: {
    color: "white",
    fontSize: 18,
  },
});
