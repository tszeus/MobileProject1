import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}> Pomodoro Timer </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#19196f",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 5,
    position: "relative",
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1.5,
    fontFamily: Platform.OS == "android" ? "notoserif" : "system",
    marginTop: 50,
  },
});
