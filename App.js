import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { GolaItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsLIst] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (goalText) => {
    setGoalsLIst((currentList) => [
      ...currentList,
      { text: goalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false)
  };

  const deleteGoalHandler = (id) => {
    setGoalsLIst((currentList) => currentList.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" color="#7272AB" onPress={() => setModalIsVisible(true)}/>
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={() => setModalIsVisible(false)} />
      <View style={styles.goalsBox}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GolaItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
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
    paddingTop: 16,
  },
});
