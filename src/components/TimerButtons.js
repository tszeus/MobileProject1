import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React, { Component } from "react";

export default class TimerButtons extends Component {
  state = {};

  //renders pause, play and reset buttons
  render() {
    if (this.props.running === true) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.props.pause}
          >
            <Text style={styles.buttonText}>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.props.reset}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.props.play}
          >
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#19196f",
    padding: 30,
    flexDirection: "row",
    borderRadius: 80,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "300",
  },
});
