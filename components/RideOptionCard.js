import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const RideOptionCard = () => {
  const navigation=useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
         
      <TouchableOpacity
        onPress={() => navigation.navigate("NavigateCard")}
        style={tw`absolute top-2 left-5 z-50 p-2`} >
        <Icon name="chevron-back-outline" size={22} color="black"  type='ionicon'/>
      </TouchableOpacity>
      <Text style={tw`text-center py-4 text-[1.1rem]`}>Select Ride</Text>
     </View>
    </SafeAreaView>
  )
}

export default RideOptionCard