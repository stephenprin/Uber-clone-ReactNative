import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();


  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ resizeMode: "contain", width: 100, height: 100 }}
          source={{
            uri: "https://th.bing.com/th/id/R.ee430489d1505483166c19ab9ed00d4e?rik=9h%2bv%2fqv8kXnGKQ&pid=ImgRaw&r=0",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
                  onPress={(data, details = null) => {
                      dispatch(setOrigin({
                          location: details.geometry.location,
                            description: data.description
                      }))
                        dispatch(setDestination(null))
                      
          }}
          fetchDetails={true}
          minLength={2}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where from?"
          query={{
            key: GOOGLE_MAPS_KEY,
            language: "en",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
