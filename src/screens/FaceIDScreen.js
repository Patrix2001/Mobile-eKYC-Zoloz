import {Text, View} from 'react-native';

const FaceIDScreen = ({ navigation }) => {

  return (
    <>
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: '#000'}}>Face ID</Text>
        
      </View>
    </>
  );
};

export default FaceIDScreen;
