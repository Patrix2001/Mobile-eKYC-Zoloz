import {Button, Text, View} from 'react-native';

const RealIDScreen = ({navigation}) => {
  return (
    <>
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: '#000'}}>Real ID</Text>
        <Button
          title="User Profile"
          color="#0ca8e6"
          onPress={() => navigation.replace('Profile', {name: 'Jane'})}
        />
      </View>
    </>
  );
};

export default RealIDScreen;
