import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

type Props = {};
export default class App extends Component<Props> {
  static get options() {
    return {
      topBar: {
        drawBehind: true,
        visible: false,
        backButton: {
          visible: false
        }
      }
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image
            style={{ width: "100%", height: 350 }}
            resizeMode={"cover"}
            source={{
              uri:
                "http://www.rafaelvargas.com/sites/default/files/AEREAS_BCN4-11-hel003A%20copia-w2000-h1200.jpg"
            }}
          />
        </View>
        <View style={{justifyContent: "center", width: "100%", alignItems: "center"}}>
          <Text style={{fontSize: 18, color: "#8c8c8c", marginTop: 40}}>Wow! You are in</Text>
          <Text style={{fontSize: 22, color: "#2096f3", fontWeight: "600", marginTop: 10}}>Barcelona</Text>
          <Text style={{fontSize: 18, color: "#8c8c8c", textAlign: "center",  marginTop: 30}}>Start exploring now what is going round you and discover the best places to make the most out of your</Text>
          <TouchableOpacity
            style={{marginTop: 20, marginBottom: 20, width: 240, justifyContent: "center", borderRadius: 30, backgroundColor: "#2096f3", height: 50, alignItems: "center", alignSelf: "center"}}>
            <Text style={{color: "white", fontSize: 19}}>START EXPLORING</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
