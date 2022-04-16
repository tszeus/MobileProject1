import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

const TimerHeader = ({ intervalType, running }) => {
  const handleDisplay = () => {
    if (intervalType === "Working") {
      if (running === true) {
        return "Keep working hard!";
      } else {
        return "Time to work!";
      }
    } else {
      if (running === true) {
        return "It's break time! Enjoy";
      } else {
        return "Relax :)";
      }
    }
  };
  return <Text style={styles.textStyle}>{handleDisplay()}</Text>;
};

export default TimerHeader;
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 1.5,
    marginTop: 40,
    padding: 20,
  },
});
