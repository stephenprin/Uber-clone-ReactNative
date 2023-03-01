import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
      <SafeAreaView style={tw`bg-white h-full`}>
          <View style={tw`p-5`}>
              <Image
                  style={{resizeMode: 'contain', width: 100, height: 100}}
                  source={{
                      uri:"https://th.bing.com/th/id/R.ee430489d1505483166c19ab9ed00d4e?rik=9h%2bv%2fqv8kXnGKQ&pid=ImgRaw&r=0"
                  }}
              />

              <NavOptions/>
         </View>
    </SafeAreaView>
  )
}

export default HomeScreen

