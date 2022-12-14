import { Text, View, StyleSheet } from "react-native";
import Color from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Color.third,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Color.third,
    fontSize: 36,
    fontFamily: "OpenSans-bold",
  },
});
