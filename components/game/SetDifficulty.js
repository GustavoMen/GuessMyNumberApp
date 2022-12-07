import { useState } from "react";
import { Modal, View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import PrimaryButton from "../ui/PrimaryButton";
import Color from "../../constants/colors";

function SetDifficulty({ visible, onPressFunction, saveFunction }) {
  const [selectedValue, setSelectedValue] = useState("Normal");
  // Save Function
  function saveDifficulty() {
    saveFunction(selectedValue);
    onPressFunction();
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text>Teste Um</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Easy" value="Easy" />
          <Picker.Item label="Normal" value="Normal" />
          <Picker.Item label="Hard" value="Hard" />
        </Picker>
        <PrimaryButton onPressFunction={saveDifficulty}>Salvar</PrimaryButton>
      </View>
    </Modal>
  );
}

export default SetDifficulty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: Color.text,
  },

  picker: {
    width: 300,
  },
});
