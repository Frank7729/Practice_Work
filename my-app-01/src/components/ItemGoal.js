import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ffffff" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.listContainer}>
          <Text style={styles.goalText}>{props.nombre}</Text>
          <Text style={styles.goalText}>{props.apellido}</Text>
          <Text style={styles.goalText}>{props.dni}</Text>
          <Text style={styles.goalText}>{props.cel}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "gray",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 10,
  },
  listContainer:{
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default GoalItem;
