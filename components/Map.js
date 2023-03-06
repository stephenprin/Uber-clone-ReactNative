import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const Map = () => {
  const origin = useSelector(selectOrigin)

 
  return (
    <MapView
      
      style={tw`flex-1`}
      mapType="mutedStandard" 
      region={{
        latitude: origin.location.lat, // add null check
        longitude: origin.location.lng,  // add null check
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}

    >
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
  )
}

export default Map