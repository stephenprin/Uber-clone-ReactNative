import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView,Platform  } from 'react-native';
import {Provider} from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { store } from './store'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
           style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
            headerShown: false
          }} />
          <Stack.Screen name="MapScreen" component={MapScreen} options={{
            headerShown: false
          } } />
        </Stack.Navigator>
        </KeyboardAvoidingView>
        </SafeAreaProvider>
        
      
      </NavigationContainer>
     
    </Provider>
    
  );
}


