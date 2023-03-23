import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { Easing, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import _ from 'lodash';
import * as math from 'mathjs';
import { Animated } from 'react-native';

const Button = ({ value, onPress, displayValue }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const customEase = Easing.bezier(0.4, 0.0, 0.2, 1);
  const handlePressIn = useCallback(() => {
    Animated.timing(scale, {
      toValue: 0.8,
      duration: 200,
      useNativeDriver: true, // utilizar useNativeDriver en la animación de escala
      easing: customEase
    }).start();
  }, []);

  const handlePressOut = useCallback(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true, // utilizar useNativeDriver en la animación de escala
      easing: customEase
    }).start();
  }, []);

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
      <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>{displayValue || value}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const Calculator = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonPress = useCallback((buttonValue) => {
    setInputText(inputText + buttonValue);
  }, [inputText]);

  const handleClearPress = useCallback(() => {
    setInputText('');
    setResult(null);
  }, []);

  const handleEqualsPress = useCallback(() => {
    try {
      const result = math.evaluate(inputText.replace(/x/g, '*'))
      setResult(result.toString())
    } catch (error) {
      setResult('Error');
    }
  }, [inputText]);

  const displayedText = inputText.replace(/\*/g, 'x');

  const buttons = [
    { value: '√', onPress: () => handleButtonPress('sqrt('), displayValue: '√' },
    { value: 'π', onPress: () => handleButtonPress('pi'), displayValue: 'π' },
    { value: '^', onPress: () => handleButtonPress('^') },
    { value: 'sin', onPress: () => handleButtonPress('sin(') },
    { value: 'cos', onPress: () => handleButtonPress('cos(') },
    { value: 'tan', onPress: () => handleButtonPress('tan(') },
    { value: '(', onPress: () => handleButtonPress('(') },
    { value: ')', onPress: () => handleButtonPress(')') },
    { value: '1', onPress: () => handleButtonPress('1') },
    { value: '2', onPress: () => handleButtonPress('2') },
    { value: '3', onPress: () => handleButtonPress('3') },
    { value: '+', onPress: () => handleButtonPress('+') },
    { value: '4', onPress: () => handleButtonPress('4') },
    { value: '5', onPress: () => handleButtonPress('5') },
    { value: '6', onPress: () => handleButtonPress('6') },
    { value: '-', onPress: () => handleButtonPress('-') },
    { value: '7', onPress: () => handleButtonPress('7') },
    { value: '8', onPress: () => handleButtonPress('8') },
    { value: '9', onPress: () => handleButtonPress('9') },
    { value: 'x', onPress: () => handleButtonPress('*'), displayValue: 'x' },
    { value: '0', onPress: () => handleButtonPress('0') },
    { value: '.', onPress: () => handleButtonPress('.') },
    { value: 'C', onPress: handleClearPress },
    { value: '/', onPress: () => handleButtonPress('/'), displayValue: '/' },
    { value: '=', onPress: handleEqualsPress },
    { value: 'DEL', onPress: () => setInputText(inputText.slice(0, -1)) }
  ];

  return (
    <View style={styles.container}>
      <View style={{ padding: 20, width: '100%' }}>
        <TextInput
          style={[styles.textInput, { width: '100%' }]}
          label="Enter expression"
          value={displayedText}
          onChangeText={setInputText}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.textInput, { width: '80%', alignSelf: 'flex-end' }]}
          label="Result"
          value={result}
          keyboardType="numeric"
          editable={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <Button key={index} value={button.value} onPress={button.onPress} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  textInput: {
    height: 60,
    fontSize: 20,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    margin: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: '20%',
    margin: 5,
    backgroundColor: '#cc2ae9',
    borderRadius: 10,
    paddingVertical: 10,
  },
});

export default Calculator