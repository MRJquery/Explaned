import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class HomeScreen extends React.Component {

    render() {
        this.props.navigation.setOptions({ 
            headerBackTitle: '',
            headerShown: false ,
        })
    
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 300 }}
        source={require("./assets/images/bg1.png")}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>
        {" "}
        EXPLANED{" "}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "white",
          textAlign: "center",
          marginHorizontal: 20,
        }}
      >
        SELAMAT DATANG DI PLATFORM TOUR EXPLANED KE SELERUH NEGARA{" "}
      </Text>

      <View style={{ flexDirection: "row", margin: 20, paddingVertical: 20 }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
          style={{
            backgroundColor: "#42a5f5",
            padding: 10,
            width: 150,
            borderRadius: 30,
            marginHorizontal: 2,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 10,
            width: 150,
            borderRadius: 30,
            marginHorizontal: 2,
            borderWidth: 1,
            borderColor: "#000",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#000",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={{ color: "#fff" }}> Atau melalui sosial media</Text>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: "#3f51b5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
            f
          </Text>
        </View>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: "#f44336",
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
            G
          </Text>
        </View>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: "#1565c0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
            in
          </Text>
        </View>
      </View>
    </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffb300",
    alignItems: "center",
    justifyContent: "center",
  },
});
