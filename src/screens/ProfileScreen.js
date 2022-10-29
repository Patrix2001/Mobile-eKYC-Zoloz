import {ScrollView, Text, View} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  return (
    <>
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: '#000'}}>Profile</Text>
        <Text>{route.params.name}</Text>
      </View>
    </>
  );
};

export default ProfileScreen;
