import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../../assets/index";
import MenuContainer from "../components/MenuContainer";

import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { getPlacesData } from "../../api";

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstSection}>
        <View style={styles.firstTitle}>
          <Text style={styles.textDiscover_1}>
            Discover
          </Text>
          <Text style={styles.textToday_2}>
            the beauty today
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={Avatar}
            style={styles.firstImage}
          />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Buscar"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: "4505511c1dmsh3594a7511caf7b8p118506jsn4a2e93d31364",
            language: "en",
          }}
        />
      </View>

      {/* Menu Container */}
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.menus}>
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View style={styles.tipsexplore}>
              <Text style={styles.tips}>
                Top Tips
              </Text>
              <TouchableOpacity
                style={styles.exploreContainer}
              >
                <Text style={styles.explore}>
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.dateFull}>
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCardContainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View style={styles.dateNone}>
                    <Image
                      source={NotFound}
                      style={styles.secondImage}
                    />
                    <Text style={styles.textNotFound}>
                      Opps...No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative'
  },
  firstSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    padding: 20,
  },
  firstTitle: {
    flex: 1,
    justifyContent: 'space-between'
  },
  textDiscover_1: {
    fontSize: 40,
    fontWeight: '600',
    color: '#0B646B'
  },
  textToday_2: {
    fontSize: 35,
    color: '#527283'
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(156 163 175 / var(--tw-bg-opacity))',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 50)'
  },
  firstImage: {
    borderRadius: 10,
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  searchContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  activityIndicator: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  menus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  tipsexplore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  tips: {
    color: '#2C7379',
    fontSize: 30,
    fontWeight: 'bold'
  },
  exploreContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  explore: {
    color: '#A0C4C7',
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 5,
  },
  dateFull: {
    paddingHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  dateNone: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  textNotFound: {
    fontSize: 25,
    color: '#428288',
    fontWeight: '600',
  }
})

export default Discover;