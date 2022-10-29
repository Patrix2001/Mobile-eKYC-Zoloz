import {Text, View} from 'react-native';

const DocIDScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: '#000'}}>Doc ID</Text>
      </View>
    </>
  );
};

export default DocIDScreen;
