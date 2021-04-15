import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

//import Test from './src/components/Test';
import MediMap from './src/Components/Map/MediMap';
import MediModal from './src/Components/Map/MediModal';
import MediMoreInfo from './src/Components/Map/MediMoreInfo';

const Stack = createStackNavigator();

const App = () => {
  return (
    //<Test />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MediMap">
        <Stack.Screen name="MediMap" component={MediMap} />
        <Stack.Screen name="MediModal" component={MediModal} />
        <Stack.Screen name="MediMoreInfo" component={MediMoreInfo} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
};

export default App;