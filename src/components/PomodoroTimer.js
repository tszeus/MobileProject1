import { Text, View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Timer from "./Timer";

const PomodoroTimer = () => {
  const [workTime, setWorkTime] = useState(0.1);
  const [breakTime, setBreakTime] = useState(0.1);
  const [intervalType, setIntervalType] = useState("Working");
  console.log(intervalType);
  // handles completion of timer
  const handleTimerCompleted = () => {
    intervalType === "Working"
      ? setIntervalType("Break")
      : setIntervalType("Working");
  };

  // gets triggered on change of worktimer text
  const handleWorkTime = (text) => {
    if (text >= 0) {
      setWorkTime(text);
    } else {
      setWorkTime(25);
    }
  };

  // gets triggered on change of breaktimer text
  const handleBreakTime = (text) => {
    if (text >= 0) {
      setBreakTime(text);
    } else {
      setBreakTime(5);
    }
  };

  // called to set the timer's time
  const handleTime = () => {
    if (intervalType === "Working") {
      return workTime;
    } else {
      return breakTime;
    }
  };

  return (
    <View>
      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <Text style={styles.textStyle}>WorkTime</Text>
          <TextInput
            style={styles.textStyle}
            keyboardType={"numeric"}
            defaultValue={"" + workTime}
            placeholder="workTime in mins"
            onChangeText={(e) => handleWorkTime(e)}
          />
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.textStyle}>BreakTime</Text>
          <TextInput
            style={styles.textStyle}
            keyboardType={"numeric"}
            defaultValue={"" + breakTime}
            placeholder="breakTime in mins"
            onChangeText={(e) => handleBreakTime(e)}
          />
        </View>
      </View>
      <Timer
        intervalType={intervalType}
        Oncomplete={handleTimerCompleted}
        period={handleTime()}
      />
    </View>
  );
};

export default PomodoroTimer;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 1.5,
    // fontFamily: Platform.OS == "android" ? "notoserif" : "system",
    marginTop: 40,
    padding: 20,
  },
});
