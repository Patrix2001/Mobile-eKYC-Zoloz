import {ScrollView, Text, View} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {useEffect} from 'react';
import {FaceCapture, IdRecognition, RealId} from '../helpers';

const popAction = StackActions.pop(1);

const ProfileScreen = ({navigation, route}) => {
  const {transactionId, code} = route.params;
  useEffect(() => {
    const checkResult = async () => {
      if (code === 1) {
        const response = await FaceCapture().result(transactionId);
      } else if (code === 2) {
        const response = await IdRecognition().result(transactionId);
      } else if (code === 3) {
        const response = await RealId().result(transactionId);
      } else if (code === 4) {
      } else {
        navigation.dispatch(popAction);
      }
    };
    checkResult();
  }, []);
  return (
    <>
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: '#000'}}>Profile</Text>
        <Text>{transactionId}</Text>
      </View>
    </>
  );
};

export default ProfileScreen;
