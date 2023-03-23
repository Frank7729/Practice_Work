import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
    >
      <View
        style={[styles.subcontainer, type === title.toLowerCase() ? styles.titleContainer : null]}
      >
        <Image style={styles.image} source={imageSrc} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5
  },
  subcontainer: {
    alignItems: 'center',
    borderRadius: 12,
    height: 100,
    justifyContent: 'center',
    padding: 2,
    width: 100,
  },
  titleContainer: {
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    color: '#00BCC9',
    fontSize: 20,
    fontWeight: '600',
  }
});

export default MenuContainer;