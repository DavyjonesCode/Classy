import React from "react";
import {View, Text} from "react-native";

import NavBar from "../components/navBar";

const BackTest = ({navigation}) => {
    return (
        <View style={{backgroundColor: "white", flex: 1}}>
            <Text>hello world</Text>
            <NavBar navigation={navigation} />
        </View>
    )
}

export default BackTest