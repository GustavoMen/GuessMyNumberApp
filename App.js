import { useState } from "react";
import { StyleSheet, ImageBackground, View, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, SetUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    SetUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.rootViewScreen}>
        <ImageBackground
          source={require("./assets/Images/background.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  rootViewScreen: {
    flex: 1,
    backgroundColor: "#222629",
  },

  backgroundImage: {
    opacity: 0.14,
  },
});
