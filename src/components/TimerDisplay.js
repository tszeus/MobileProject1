import { Text, View, StyleSheet } from "react-native";
import React from "react";

const TimerDisplay = ({ time }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {Math.floor(time / 60)
          .toString()
          .padStart(2, "0") +
          ":" +
          (time % 60).toString().padStart(2, "0")}
      </Text>
    </View>
  );
};

export default TimerDisplay;
const styles = StyleSheet.create({
  container: {
    marginTop: "7%",
    marginBottom: "10%",
    marginLeft: "7%",
    marginRight: "7%",
    padding: "20%",
    borderColor: "white",
    borderRadius: 80,
    borderWidth: 5,
    alignItems: "center",
    backgroundColor: "#19196f",
  },
  textStyle: {
    color: "white",
    fontSize: 50,
    fontWeight: "400",
  },
});
