import { StyleSheet, ImageBackground, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
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
          <StartGameScreen />
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
