import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

export default function ImageViewer({ image, selectedImage }) {
    const imageSource = selectedImage !== null
        ? { uri: selectedImage }
        : image;

    return (
        <Image resizeMethod='scale' source={imageSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 18,
        height: 440,
        resizeMode: 'cover',
        width: 340,
    },
});