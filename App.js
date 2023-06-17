import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { GolaItem } from "./components/GoalItem";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalsList, setGoalsLIst] = useState([]);

  const InputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoal = () => {
    setGoalsLIst((currentList) => [
      ...currentList,
      { text: goalText, key: Math.random().toString() },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Enter your goal"
          onChangeText={InputHandler}
        />
        <Button title="Add Goal" onPress={addGoal} />
      </View>
      <View style={styles.goalsBox}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return <GolaItem text={itemData.item.text} />;
          }}
          alwaysBounceVertical={false}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEAD0",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsBox: {
    flex: 5,
  },
});
