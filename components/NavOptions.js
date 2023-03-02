import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import { Icon } from '@rneui/themed';





const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    }
]

const NavOptions = () => {
  return (
      <FlatList
          horizontal
          
          data={data}
          keyExtractor={(item) => item.id} 
          renderItem={({ item }) => (
              <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-300 m-3 w-40`}>
                  <View>
                      <Image
                          style={{width: 120, height: 120, resizeMode: 'contain'}}
                          source={{
                                
                      }}
                      />
                      <Text style={tw`font font-semibold pt-4 text-center text-sky-900`}>{item.title}</Text>
                      <View style={tw`flex-row justify-center`}>
                      <Icon style={tw`bg-black rounded-full mt-4 p-2 w-10 `} type="antdesign" color="white" name="arrowright" />
                      </View>
                  </View>
                </TouchableOpacity>
            )}
      
      />
  )
}

export default NavOptions