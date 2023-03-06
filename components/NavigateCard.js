import { View, Text, SafeAreaView  } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from "twrnc";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
  const dispatch = useDispatch() 
  const navigation=useNavigation()
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
          <Text style={tw`py-5 text-center text-[1.2rem]`}>Good Morning, Prince!</Text>
          <View style={tw` border-t border-gray-200 flex-shrink`}>
          <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
              marginHorizontal:20,
              marginTop:10,

              backgroundColor: '#d3d3d3',
              
            },
            textInput: {
              fontSize: 18,
              backgroundColor: 'transparent',
              color:'black'
             
            },
            
          }}
          onPress={((data, details=null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description:data.description
              })
            )
            navigation.navigate('RideOptionCard')
          })}
             
          fetchDetails={true}
          minLength={2}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where to?"
          query={{
            key: GOOGLE_MAPS_KEY,
            language: "en",
          }}
        />
          </View>
    </SafeAreaView>
  )
}

export default NavigateCard