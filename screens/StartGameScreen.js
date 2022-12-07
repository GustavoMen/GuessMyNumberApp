import { useState } from "react";
import { TextInput, View, StyleSheet, Text, Alert } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import SetDifficulty from "../components/game/SetDifficulty";
import Title from "../components/ui/Title";
import Color from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  // Modal for configuration of difficulty Levels
  const [configIsVisible, setConfigIsVisible] = useState(true);

  function changeConfigView() {
    configIsVisible === true
      ? setConfigIsVisible(false)
      : setConfigIsVisible(true);
  }

  // Difficulty setted by User
  const [difficulty, setDifficulty] = useState("");

  function handlerDiffuculty(selectedDifficulty) {
    setDifficulty(selectedDifficulty);
  }

  // Game Logic
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(e) {
    setEnteredNumber(e);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <>
      <View style={styles.title}>
        <Title>Guess the Number</Title>
      </View>

      <SetDifficulty
        visible={configIsVisible}
        onPressFunction={changeConfigView}
        saveFunction={handlerDiffuculty}
      />

      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={3}
          keyboardType={"number-pad"}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressFunction={resetInputHandler}>
              Reset
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPressFunction={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.configButton}>
        <PrimaryButton onPressFunction={changeConfigView}>
          <Text> Change Game Mode</Text>
        </PrimaryButton>
      </View>
    </>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 72,
  },

  numberInput: {
    height: 50,
    fontSize: 32,
    width: 100,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
    color: Color.text,
    marginVertical: 8,
    fontWeight: "bold",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },

  configButton: {
    marginTop: 24,
    marginHorizontal: 15,
  },
});
