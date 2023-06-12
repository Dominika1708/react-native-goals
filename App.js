import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalsList, setGoalsLIst] = useState([]);

  const InputHandler = (enteredText) => {
    setGoalText(enteredText);
  }

  const addGoal = () => {
    setGoalsLIst((currentList) => [...currentList, goalText]);
  };
  return (
    <View style={styles.container}>
      <View>
      <TextInput placeholder="Enter your goal" onChangeText={InputHandler}/>
      <Button title="Add Goal" onPress={addGoal}/>
      </View>
      <View>
        {goalsList.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
