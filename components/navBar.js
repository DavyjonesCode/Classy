import React from "react"
import {View, Text, StyleSheet} from "react-native"
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
    return(
        <View style={styles.container}>
            <View style={styles.directory}>
                {/* <Menu/> */}
                <Text style={styles.text}>Home Page</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#111028",
        bottom: 0,
        position: "absolute",
        width: "100%",
        height: 60,
        borderTopColor: "white",
        borderTopWidth: 3,
    },
    directory: {
        alignItems: 'center',


    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        justifyContent: 'center',        
    }
})

export default NavBar