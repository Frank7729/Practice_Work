import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemCardContainer = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Item", { param: data })}
      style={styles.container}
    >
      <Image source={{ uri: imageSrc }} style={styles.image} />
      {title ? (
        <>
          <Text style={styles.title}>
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>

          <View style={styles.ubication}>
            <FontAwesome name="map-marker" size={20} color="#8597A2" />
            <Text style={styles.textubi}>
              {location?.length > 18 ? `${title.slice(0, 18)}..` : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 0.5,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    width: 180,
  },
  image: {
    borderRadius: 6,
    height: 160,
    resizeMode: 'cover',
    width: '100%',
  },
  title: {
    color: '#428288',
    fontSize: 17,
    fontWeight: 'bold',
  },
  ubication: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textubi: {
    color: '#428288',
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  }
})

export default ItemCardContainer;