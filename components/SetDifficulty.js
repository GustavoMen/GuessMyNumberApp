import { useState } from "react";
import { Modal, View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import PrimaryButton from "./PrimaryButton";

function SetDifficulty(props) {
  const [selectedValue, setSelectedValue] = useState("Normal");

  return (
    <Modal visible={props.visible} animationType="slide">
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
        <PrimaryButton onPressFunction={props.onPressFunction}>
          Salvar
        </PrimaryButton>
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
    backgroundColor: "#ffffff",
  },

  picker: {
    width: 300,
  },
});
