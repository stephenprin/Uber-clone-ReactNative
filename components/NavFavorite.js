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
        destination: "Code Street, London, UK"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "London Eye, London, UK"
    }
    
]
 
 const NavFavorite = () => {
   return (
       <FlatList
           keyExtractor={(item) => item.id}
           data={data}
           renderItem={({ item }) => (
               <TouchableOpacity style={tw`flex-row items-center p-5`}>
                   <Icon
                       style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                       name={item.icon}
                       type="ionicon"
                       color="#cd9575"
                       size={18}
                       
                   />
               </TouchableOpacity>

           )}
       />
   )
 }
 
 export default NavFavorite