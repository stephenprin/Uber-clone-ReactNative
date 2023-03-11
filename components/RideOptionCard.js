import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "Ubery",
    muttiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-156",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];



const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState(null);

 const travelTimeInformation = useSelector(selectTravelTimeInformation)

  

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw` mt-2 rounded-full p-1 w-24 z-50
          `}
        >
          <Icon
            name="chevron-back-outline"
            size={24}
            color="black"
            type="ionicon"
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-3 mt-[-1rem] text-[1.2rem]`}>Select Ride -{ travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              style={tw`flex-row justify-between items-center px-10  
               ${item.id === selected?.id && "bg-gray-200"}`}
            >
              <Image
                style={{ width: 100, height: 100, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <View>
                <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                <Text>{ travelTimeInformation?.duration.text} travel time</Text>
              </View>
              <Text style={tw`text-xl text-stone-700`}>$10</Text>
            </TouchableOpacity>

          
          );
        }}
        
      />
      
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 mx-6 ${!selected && "bg-gray-200"}`}>
          <Text style={tw`text-l text-white text-center`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    
    </SafeAreaView>
  );
};

export default RideOptionCard;
