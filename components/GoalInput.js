import { Button, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

export const GoalInput = ({ onAddGoal }) => {
  const [goalText, setGoalText] = useState("");

  const InputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        placeholder="Enter your goal"
        onChangeText={InputHandler}
        value={goalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#96616B",
  },
  input: {
    borderWidth: 1,
    borderColor: "#96616B",
    borderRadius: 6,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
