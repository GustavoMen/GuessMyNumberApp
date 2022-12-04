import { useState } from "react";
import { Modal, View, Text } from "react-native";

function SetDifficulty(props) {
  const difficultyLevels = ["Easy", "Normal", "Hard"];

  const [whichIsSelected, setWhichIsSelected] = useState(difficultyLevels[1]);

  return (
    <Modal visible={props.Modal}>
      <View>
        <View>
          <Text>Easy</Text>
        </View>

        <View>
          <Text>Normal</Text>
        </View>

        <View>
          <Text>Hard</Text>
        </View>
      </View>
    </Modal>
  );
}

export default SetDifficulty;
