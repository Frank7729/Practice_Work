import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import GoalInput from '../components/InputGoal';
import GoalItem from '../components/ItemGoal';

const User = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { nombre: enteredGoalText.nombre, apellido: enteredGoalText.apellido, dni: enteredGoalText.dni, cel: enteredGoalText.cel, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Agregar Nuevo Usuario" onPress={startAddGoalHandler} color="aqua" />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <Text style={styles.titlelist}>Lista de Usuarios</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                nombre={itemData.item.nombre}
                apellido={itemData.item.apellido}
                dni={itemData.item.dni}
                cel={itemData.item.cel}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  titlelist: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  goalsContainer: {
    flex: 1,
    padding: 20,
  },
});

export default User