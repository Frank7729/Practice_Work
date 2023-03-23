import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../../assets/index";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* First Section */}
      <View style={styles.firstSection}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Go</Text>
        </View>
        <Text style={styles.title}>Travel</Text>
      </View>

      {/* Second Section */}
      <View style={styles.secondSection}>
        <Text style={styles.subtitle}>Enjoy the trip with</Text>
        <Text style={styles.mainTitle}>Good Moments</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio
          quis nostrum
        </Text>
      </View>

      {/* Circle Section */}
      <View style={styles.circleSection1}></View>
      <View style={styles.circleSection2}></View>

      {/* Image container */}
      <View style={styles.imageContainer}>
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          style={styles.heroImage}
          resizeMode="center"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          style={styles.goButton}
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            style={styles.goButtonPulse}
          >
            <Text style={styles.goButtonText}>Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
  },
  firstSection: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
    paddingHorizontal: 20,
    spaceX: 2,
  },
  logo: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 9999,
    height: 64,
    justifyContent: 'center',
    width: 64,
  },
  logoText: {
    color: '#00BCC9',
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    color: '#2A2B4B',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  secondSection: {
    marginTop: 8,
    paddingHorizontal: 20,
  },
  subtitle: {
    color: '#3C6072',
    fontSize: 36,
  },
  mainTitle: {
    color: '#00BCC9',
    fontSize: 32,
    fontWeight: 'bold',
  },
  description: {
    color: '#3C6072',
    fontSize: 16,
  },
  circleSection1: {
    backgroundColor: '#00BCC9',
    borderRadius: 200,
    bottom: 120,
    height: 400,
    position: 'absolute',
    right: -150,
    width: 400,
  },
  circleSection2: {
    backgroundColor: '#E99265',
    borderRadius: 200,
    bottom: -100,
    height: 400,
    left: -250,
    position: 'absolute',
    width: 400,
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  heroImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    marginTop: 20,
    resizeMode: 'cover',
  },
  goButton: {
    position: 'absolute',
    bottom: 100,
    width: 95,
    height: 95,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 4,
    borderColor: '#00BCC9',
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goButtonPulse: {
    alignItems: 'center',
    backgroundColor: '#00BCC9',
    borderRadius: 999,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  goButtonText: {
    color: 'white',
    fontSize: 36,
    fontWeight: '600',
  }
})

export default Home;