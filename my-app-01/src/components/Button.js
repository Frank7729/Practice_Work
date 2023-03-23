import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../../theme";

export default function ButtonStyled({
  children,
  design,
  backgroundColor,
  style,
  ...restOfProps
}) {
  const buttonStyles = [
    design == "design" && styles.buttonStyle,
    backgroundColor == "green" && styles.buttonBackGroundColorSave,
    backgroundColor == "red" && styles.buttonBackGroundColorCancel,
    style,
  ];
  return (
    <Text style={buttonStyles} {...restOfProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  buttonBackGroundColorCancel: {
    backgroundColor: theme.colors.buttonCancel,
  },
  buttonBackGroundColorSave: {
    backgroundColor: theme.colors.buttonSave,
  },
  buttonStyle: {
    backgroundColor: theme.colors.button,
    borderRadius: 10,
    margin: 10,
  }
});
