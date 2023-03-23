import { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ButtonStyled from "./Button";

function GoalInput(props) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [cel, setCel] = useState("");

  function nombreInputHandler(enteredText) {
    setNombre(enteredText);
  }
  function apellidoInputHandler(enteredText) {
    setApellido(enteredText);
  }
  function dniInputHandler(enteredText) {
    setDni(enteredText);
  }
  function celInputHandler(enteredText) {
    setCel(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal({ nombre, apellido, dni, cel });
    setNombre("");
    setApellido("");
    setDni("");
    setCel("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/adaptive-icon.png")}
        />
        <TextInput
          onChangeText={nombreInputHandler}
          value={nombre}
          placeholder="Nombres"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={apellidoInputHandler}
          value={apellido}
          placeholder="Apellidos"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={dniInputHandler}
          value={dni}
          placeholder="DNI"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={celInputHandler}
          value={cel}
          placeholder="Celular"
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <ButtonStyled backgroundColor="red" design="design">
            <Pressable
              style={({ pressed }) => pressed && styles.buttonP}
              onPress={props.onCancel}
            >
              <Text style={styles.text}>Cancelar</Text>
            </Pressable>
          </ButtonStyled>
          <ButtonStyled backgroundColor="green" design="design">
            <Pressable
              style={({ pressed }) => pressed && styles.buttonP}
              onPress={addGoalHandler}
            >
              <Text style={styles.text}>Guardar</Text>
            </Pressable>
          </ButtonStyled>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "purple",
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 100,
  },
  textInput: {
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    padding: 10,
    width: "70%",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonP: {
    borderRadius: 10,
    opacity: 0.5,
    backgroundColor: "gray",
  },
  text: {
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default GoalInput;
