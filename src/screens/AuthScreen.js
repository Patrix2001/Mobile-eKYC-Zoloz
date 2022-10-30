import {Text, View} from 'react-native';

const AuthScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: '#000'}}>Connect</Text>
      </View>
    </>
  );
};

export default AuthScreen;
