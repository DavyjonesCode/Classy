import React from "react"
import {View, Text, StyleSheet} from "react-native"

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 

const NavBar = () => {
    return(
        <View style={styles.container}>
            <AntDesign name="left" size={35} color="black" />
            <Text style={styles.text}>Home Page</Text>
            <MaterialCommunityIcons name="menu" size={35} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 50,
        alignItems: 'center'
    },
    text:{
        fontSize: 30,
    }
})

export default NavBar