import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", paddingTop: 73, paddingBottom: 10 }}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://www.shareicon.net/data/2016/09/13/828506_tie_512x512.png",
          }}
        />
      </View>
      <Text style={styles.text}> Classy </Text>
      {/* this is where it switches to the sign in stuff */}
      <View>
        <TouchableOpacity
          style={styles.input}
          onPress={() => navigation.navigate("Home", { name: "Main" })}
        >
          <Text style={{ paddingRight: 115 }}>Sign in with Google</Text>
          <Image
            style={{
              height: 30,
              width: 30,
              marginBottom: 1,
            }}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png",
            }}
          />
        </TouchableOpacity>
        <TextInput style={styles.input} defaultValue="Email" />
        <TextInput style={styles.input} defaultValue="Password" />

        <TouchableOpacity
          onPress={() => navigation.navigate("Home", { name: "Main" })}
          style={{
            ...styles.input,
            backgroundColor: "#00C908",
            width: 68,
            alignSelf: "flex-end",
          }}
        >
          <Text style={{ fontSize: 20, margin: 5, alignSelf: "center" }}>
            Login
          </Text>
        </TouchableOpacity>
        {/* add new user sign up */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111028",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: "white",
    paddingBottom: 40,
  },
  input: {
    height: 40,
    borderRadius: 8,
    width: 280,
    backgroundColor: "white",
    paddingLeft: 5,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    color: "grey",
  },
});

export default Login;
