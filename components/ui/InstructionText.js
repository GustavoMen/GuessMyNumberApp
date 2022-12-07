import { Text, StyleSheet } from "react-native";
import Color from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Color.text,
    fontSize: 24,
    fontWeight: "bold",
  },
});
