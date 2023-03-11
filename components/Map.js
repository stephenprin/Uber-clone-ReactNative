import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  
  setTravelTimeInformation,
} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef();
  const dispatch = useDispatch();
 

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, left: 50, bottom: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_KEY}`)
        .then((res) => res.json())
        .then((data) => {
         console.log(data.rows[0].elements[0])
          dispatch(setTravelTimeInformation(data?.rows[0]?.elements[0]));
        });
    };
    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_KEY]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      region={{
        latitude: origin.location.lat, // add null check
        longitude: origin.location.lng, // add null check
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destintion"
          description={destination.description}
          identifier="destination"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
