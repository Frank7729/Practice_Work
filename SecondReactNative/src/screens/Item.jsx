import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Item = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.firstSection}>
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
            }}
            style={styles.image}
          />

          <View style={styles.iconLeftHeart}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              style={styles.iconLeft}
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconHeart}
            >
              <FontAwesome5 name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.pricenote}>
            <View style={styles.priceContainer}>
              <Text style={styles.level}>
                {data?.price_level}
              </Text>
              <Text style={styles.price}>
                {data?.price}
              </Text>
            </View>

            <View style={styles.open_now_text}>
              <Text>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secondSection}>
          <Text style={styles.dateName}>
            {data?.name}
          </Text>
          <View style={styles.locationContainer}>
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text style={styles.dateLocation}>
              {data?.location_string}
            </Text>
          </View>
        </View>

        <View style={styles.thirdSection}>
          {data?.rating && (
            <View style={styles.fontext}>
              <View style={styles.iconsContainer}>
                <FontAwesome name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text style={styles.dateRaPriBe}>
                  {data?.rating}
                </Text>
                <Text style={styles.dateRaPriBe}>
                  Ratings
                </Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View style={styles.materialtext}>
              <View style={styles.iconsContainer}>
                <MaterialIcons name="attach-money" size={24} color="black" />
              </View>
              <View>
                <Text style={styles.dateRaPriBe}>{data?.price_level}</Text>
                <Text style={styles.dateRaPriBe}>Price Level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View style={styles.fontext}>
              <View style={styles.iconsContainer}>
                <FontAwesome5 name="map-signs" size={24} color="black" />
              </View>
              <View>
                <Text style={styles.dateRaPriBe}>
                  {data?.bearing}
                </Text>
                <Text style={styles.dateRaPriBe}>Bearing</Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <View>
            <Text style={styles.fourthSection}>
              {data?.description}
            </Text>
          </View>
        )}

        {data?.cuisine && (
          <View style={styles.fifthSection}>
            {data?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                style={styles.nName}
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={styles.sixthSection}>
          {data?.phone && (
            <View style={styles.fontextSixth}>
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text style={styles.textSixth}>{data?.phone}</Text>
            </View>
          )}
          {data?.email && (
            <View style={styles.fontextSixth}>
              <FontAwesome name="envelope" size={24} color="#428288" />
              <Text style={styles.textSixth}>{data?.email}</Text>
            </View>
          )}
          {data?.address && (
            <View style={styles.fontextSixth}>
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text style={styles.textSixth}>{data?.address}</Text>
            </View>
          )}

          <View style={styles.BookNow}>
            <Text style={styles.textBookNow}>
              Book Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: 'white',
    flex: 1,
    position: 'relative',
  },
  ScrollView: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  firstSection: {
    position: 'relative',
    backgroundColor: 'white'
  },
  image: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  iconLeftHeart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    paddingHorizontal: 10,
    position: 'absolute',
    right: 0,
    top: 10,
  },
  iconLeft: {
    width: 40,
    height: 40,
    borderRadius: 7,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconHeart: {
    alignItems: 'center',
    backgroundColor: '#06B2BE',
    borderRadius: 7,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  pricenote: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    right: 0,
    left: 0,
    bottom: 10,
    paddingHorizontal: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  level: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 14
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'gray',
  },
  open_now_text: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: '#ccf0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSection: {
    marginTop: 15,
  },
  dateName: {
    color: '#428288',
    fontSize: 24,
    fontWeight: 'bold',
  },
  locationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  dateLocation: {
    color: '#8C9EA6',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  thirdSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  fontext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    alignItems: 'center',
    backgroundColor: '#fce4df',
    borderRadius: 15,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  dateRaPriBe: {
    color: '#515151',
    paddingHorizontal: 5,
    textTransform: 'capitalize',
  },
  materialtext: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  fourthSection: {
    color: '#97A6AF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.025,
    marginTop: 15,
  },
  fifthSection: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  nName: {
    backgroundColor: '#D1FAE5',
    borderRadius: 5,
    marginHorizontal: 2,
    marginVertical: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sixthSection: {
    borderRadius: 15,
    marginTop: 15,
    paddingVertical: 7,
  },
  fontextSixth: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 2,
    backgroundColor: '#e1e6e3',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  textSixth: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,

  },
  BookNow: {
    alignItems: 'center',
    backgroundColor: '#06B2BE',
    borderRadius: 7,
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  textBookNow: {
    color: '#e1e6e3',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 0.05,
    textTransform: 'uppercase',
  }
})
export default Item;