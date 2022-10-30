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
import {Text, Dimensions, StyleSheet, View} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DocIDScreen from './src/screens/DocIDScreen';
import FaceIDScreen from './src/screens/FaceIDScreen';
import RealIDScreen from './src/screens/RealIDScreen';
import AuthScreen from './src/screens/AuthScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
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
          statusBarColor: '#0ca8e6',
          cardStyleInterpolator: forFade,
        }}>
        <Stack.Screen
          options={{
            header: props => (
              <View style={styles.headerBar}>
                <Text style={styles.headerText}>{props.route.name}</Text>
              </View>
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Doc ID" component={DocIDScreen} />
        <Stack.Screen name="Face ID" component={FaceIDScreen} />
        <Stack.Screen name="Real ID" component={RealIDScreen} />
        <Stack.Screen name="Authenticate" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    height: Dimensions.get('window').width * 0.3,
    backgroundColor: '#0ca8e6',
    color: '#fff',
    justifyContent: 'center',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
    marginLeft: 15,
  },
});

export default App;
