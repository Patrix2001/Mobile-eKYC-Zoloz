/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {React, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  NativeModules,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const {ZolozKit} = NativeModules;
const BASE_URL = 'http://10.0.2.2';
// console.log(ZLZ_CHAMELEON_KEY);

const HomeScreen = ({navigation}) => {
  return <></>;
};

// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

const App = () => {
  const [metaInfo, setMetaInfo] = useState();

  ZolozKit.getMetaInfo(metainfo => {
    setMetaInfo(metainfo);
  });

  const faceCapture = async () => {
    try {
      const url = BASE_URL + '/api/facecapture/initialize';
      const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metaInfo: metaInfo,
          serviceLevel: 'FACECAPTURE0002',
        }),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      for (var key in data) {
        console.log(key, data[key]);
      }
      ZolozKit.start(
        data.clientCfg,
        {
          ZLZ_LOCAL_KEY: 'en-US',
        },
        result => {
          console.log(result);
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Button title="Face ID" onPress={faceCapture} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
