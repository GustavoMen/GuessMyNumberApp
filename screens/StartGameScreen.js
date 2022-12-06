import { TextInput, View, StyleSheet, Text, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SetDifficulty from "../components/SetDifficulty";
import { useState } from "react";

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
      <View style={styles.configButton}>
        <PrimaryButton onPressFunction={changeConfigView}>
          <Text> Change your chalange</Text>
        </PrimaryButton>
      </View>

      <SetDifficulty
        visible={configIsVisible}
        onPressFunction={changeConfigView}
        saveFunction={handlerDiffuculty}
      />

      <View style={styles.inputContainer}>
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
      </View>
    </>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#474b4f",
    borderRadius: 8,
    elevation: 14,
    shadowColor: "black",
  },

  numberInput: {
    height: 50,
    fontSize: 32,
    width: 100,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
    color: "#ffffff",
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
    marginTop: 100,
  },
});
