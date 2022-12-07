import { Text, StyleSheet } from "react-native";
import Color from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: Color.text,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Color.text,
    padding: 12,
  },
});
