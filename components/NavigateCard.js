import { View, Text, SafeAreaView  } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from "twrnc";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorite from './NavFavorite';
import { Icon } from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
         <NavFavorite/>
      </View>

      <View style={tw`flex-row justify-evenly py2 mt-auto bg-white border-t border-gray-100`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionCard')}
          style={tw` flex flex-row bg-black w-24 px-4 py-2 items-center rounded-full gap-2`}>
           <Icon name="car-sport" size={16} color="white" type="ionicon" />
            <Text style={tw`text-center text-white `}>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw` flex flex-row border-1 w-24 px-4 py-2 items-center rounded-full gap-2`}>
           <Icon name="fast-food-outline" size={16} color="black" type="ionicon" />
            <Text style={tw`text-center text-black `}>Eats</Text>
          </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  )
}

export default NavigateCard