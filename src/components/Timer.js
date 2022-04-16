import { Text, View, StyleSheet, Vibration, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import TimerButtons from "./TimerButtons";
import TimerDisplay from "./TimerDisplay";
import TimerHeader from "./TimerHeader";

const Timer = ({ intervalType, Oncomplete, period }) => {
  const [running, setRunning] = useState("false");
  const [time, setTime] = useState(period * 60);
  const [timeId, setTimeId] = useState();
  const [isPlayed, setIsPlayed] = useState(0);
  useEffect(() => {
    if (running === "true" && time === 0) {
      setIsPlayed(0);

      handlePlay();

      clearInterval(timeId);
      setTime(period * 60);
      // Vibration.vibrate([500, 500, 500]);
      Oncomplete();
    } else if (running === false) {
      clearInterval(timeId);
    }
  }, [time]);

  useEffect(() => {
    setTime(period * 60);
  }, [period]);

  console.log(isPlayed);
  const handlePlay = () => {
    console.log("play");
    if (isPlayed == 0) {
      setIsPlayed((isPlayed) => isPlayed + 1);
      setRunning("true");
      setTimeId(
        setInterval(() => {
          setTime((time) => time - 1);
        }, 1000)
      );
    }
  };

  const handlePause = () => {
    clearInterval(timeId);
    setRunning("false");
  };
  const handleReset = () => {
    clearInterval(timeId);
    setRunning("false");
    setTime(period * 60);
  };

  return (
    <View>
      <TimerHeader running={running} intervalType={intervalType} />
      <TimerDisplay time={time} />
      <TimerButtons
        play={() => handlePlay()}
        pause={() => handlePause()}
        reset={() => {
          handleReset();
        }}
        running={running}
      />
    </View>
  );
};

export default Timer;

// componentDidUpdate() {

// }

// gets triggered when Play button is pressed

//gets triggered when Pause button is pressed

// gets triggered when Reset button is pressed

const styles = StyleSheet.create({
  textStyle: {
    color: "#C2362B",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 1.5,
    // fontFamily: Platform.OS == "android" ? "notoserif" : "system",
    marginTop: 40,
    padding: 20,
  },
});
