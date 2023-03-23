import { Text, StyleSheet } from 'react-native'
import React from 'react'

const TextStyled = ({ children, textAlign }) => {
  return (
    <Text style={[styles.title, { textAlign: textAlign }]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  }
})
export default TextStyled