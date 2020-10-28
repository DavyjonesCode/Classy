import React from "react"
import {View, Text, StyleSheet} from "react-native"

const NavBar = () => {
    return(
        <View style={styles.container}>
            <Text>
                this is a test
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    }
})

export default NavBar