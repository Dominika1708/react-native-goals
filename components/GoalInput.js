import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";
import { useState } from "react";

export const GoalInput = ({ onAddGoal, onCancel, visible }) => {
  const [goalText, setGoalText] = useState("");

  const InputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputBox}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your goal"
          onChangeText={InputHandler}
          value={goalText}
        />
        <View style={styles.buttonBox}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#7272AB" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#7272AB" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1A006A",
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonBox: {
    flexDirection: "row",
    padding: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
