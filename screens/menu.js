import React from "react";
import {Text, View, StyleSheet} from "react-native";


function NotificationsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>this is another thing</Text>
        </View>
    );
  }

const styles = StyleSheet.create ({
    container: {
        flexDirection: "row",
        alignContent: 'flex-end',
        height: "100%",
        width: "40%",
        backgroundColor: "white",
    }
})

export default NotificationsScreen