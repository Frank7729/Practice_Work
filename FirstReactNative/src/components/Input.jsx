import { TextInput, StyleSheet, View } from 'react-native'
import React from 'react'

const Input = ({ width, height, numberOfLines, value, onChangeText, placeholder, multiline, textAlignVertical }) => {
  return (
    <TextInput
      style={[styles.textInput, styles.elevation, { width: width, height: height, textAlignVertical: textAlignVertical }]}
      multiline={multiline}
      numberOfLines={numberOfLines} // Opcional: establece el número de líneas visibles
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    borderColor: '#83c5ee',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 10,
    margin: 5,
  },
  elevation: {
    elevation: 10,
    shadowColor: '#3b9dbb',
  },
})
export default Input