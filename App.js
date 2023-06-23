import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { GolaItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsLIst] = useState([]);

  const addGoalHandler = (goalText) => {
    setGoalsLIst((currentList) => [
      ...currentList,
      { text: goalText, key: Math.random().toString() },
    ]);
  };
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
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
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsBox: {
    flex: 5,
  },
});
