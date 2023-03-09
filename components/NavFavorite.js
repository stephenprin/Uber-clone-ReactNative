 import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Icon } from '@rneui/themed';
import tw from 'twrnc';


const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, Festac, NG"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Square Eye, Barnawa, NG"
    }
    
]
 
 const NavFavorite = () => {
   return (
       <FlatList
           keyExtractor={(item) => item.id}
           data={data}
           ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.6 }]} />
           ) }
           renderItem={({ item }) => (
               <TouchableOpacity style={tw`flex-row items-center p-5`}>
                   <Icon
                       style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                       name={item.icon}
                       type="ionicon"
                       color="#cd9575"
                       size={18}
                       
                   />
                   <View>
                       <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                          <Text style={tw`text-gray-500`}>{item.destination}</Text>
                   </View>
               </TouchableOpacity>

           )}
       />
   )
 }
 
 export default NavFavorite