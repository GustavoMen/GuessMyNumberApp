import { Text, StyleSheet } from "react-native";
import Color from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Color.third,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Color.third,
    padding: 12,
  },
});
