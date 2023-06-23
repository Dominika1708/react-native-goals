import { StyleSheet, View, Text, Pressable } from "react-native";

export const GolaItem = ({text, onDeleteItem, id}) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View></Pressable>
  );
};

const styles = StyleSheet.create({
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