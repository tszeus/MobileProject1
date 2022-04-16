import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const TimerButtons = ({ pause, reset, play }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle} onPress={pause}>
        <Text style={styles.buttonText}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={reset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={play}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimerButtons;
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
