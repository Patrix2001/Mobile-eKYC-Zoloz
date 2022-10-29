/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {React} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DocIDScreen from './src/screens/DocIDScreen';
import FaceIDScreen from './src/screens/FaceIDScreen';
import RealIDScreen from './src/screens/RealIDScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#0ca8e6'},
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFF',
          },
          headerTintColor: '#FFF',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Doc ID" component={DocIDScreen} />
        <Stack.Screen name="Face ID" component={FaceIDScreen} />
        <Stack.Screen name="Real ID" component={RealIDScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
