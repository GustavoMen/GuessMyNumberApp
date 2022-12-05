import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import InputNumber from "./screens/InputNumber";
import SetDifficulty from "./components/SetDifficulty";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import PrimaryButton from "./components/PrimaryButton";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function changeModalView() {
    modalIsVisible === true
      ? setModalIsVisible(false)
      : setModalIsVisible(true);
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
          <View style={styles.configButton}>
            <PrimaryButton onPressFunction={changeModalView}>
              <Text> Change your chalange</Text>
            </PrimaryButton>
          </View>

          <SetDifficulty
            visible={modalIsVisible}
            onPressFunction={changeModalView}
          />
          <InputNumber />
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

  configButton: {
    marginTop: 100,
  },

  image: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
});
