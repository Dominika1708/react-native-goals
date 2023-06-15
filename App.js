import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalsList, setGoalsLIst] = useState([]);

  const InputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoal = () => {
    setGoalsLIst((currentList) => [...currentList, {text: goalText, key: Math.random().toString()}]);
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
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#113537",
  },
  goalText: {
    color: "#fff",
  },
});
