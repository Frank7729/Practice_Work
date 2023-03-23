import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../theme'

export default function StyledText({ children, align, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        align == 'center' && styles.textAlignCenter,
        color == 'primary' && styles.colorPrimary,
        color == 'secondary' && styles.colorSecondary,
        fontSize == 'subheading' && styles.subheading,
        fontWeight == 'bold' && styles.bold,
        style
    ]
    return (
        <Text style={textStyles} {...restOfProps}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
})