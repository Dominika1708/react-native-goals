import { StyleSheet, View, Text } from "react-native";

export const GolaItem = ({text}) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
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