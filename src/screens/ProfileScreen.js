import {ScrollView, Text, View, Image, Dimensions} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import styles from '../styles';
import TextParagraph from '../components/atoms/TextParagraph';
import {ConnectAuth, FaceCapture, IdRecognition, RealId} from '../helpers';

const popAction = StackActions.pop(1);

const ProfileScreen = ({navigation, route}) => {
  const {transactionId, code} = route.params;
  const [firstPic, setFirstPic] = useState();
  const [secondPic, setSecondPic] = useState();
  const [content, setContent] = useState([]);

  const ConvertObjectToArray = data => {
    // function for generate data type object
    const result = [];
    for (let propName in data) {
      if (data.hasOwnProperty(propName)) {
        result.push([propName, data[propName]]);
      }
    }
    return result;
  };

  const generateContent = data => {
    const result = [];
    for (let key in data) {
      if (key === 'extInfo') {
        for (let info in data[key]) {
          if (data[key].hasOwnProperty(info)) {
            if (info === 'imageContent') {
              setFirstPic(data[key][info]);
            } else if (info === 'rect') {
              continue;
            } else {
              result.push([info, data[key][info]]);
            }
          }
        }
      } else if (key === 'extFaceInfo') {
        for (let info in data[key]) {
          if (data[key].hasOwnProperty(info)) {
            // set image
            if (info === 'faceImg') {
              setFirstPic(data[key][info]);
              //set content
            } else {
              result.push([info, data[key][info]]);
            }
          }
        }
      } else if (key === 'extIdInfo') {
        for (let info in data[key]) {
          if (data[key].hasOwnProperty(info)) {
            if (info === 'frontPageImg') {
              setSecondPic(data[key][info]);
            } else {
              result.push([info, data[key][info]]);
            }
          }
        }
      } else if (key === 'extRiskInfo') {
        for (let info in data[key]) {
          if (data[key].hasOwnProperty(info)) {
            result.push([info, data[key][info]]);
          }
        }
      }
    }
    return result;
  };

  useEffect(() => {
    const checkResult = async () => {
      if (code === 1) {
        const response = await FaceCapture().result(transactionId);
        setContent(generateContent(response));
      } else if (code === 2) {
        const response = await IdRecognition().result(transactionId);
        setContent(generateContent(response));
      } else if (code === 3) {
        const response = await RealId().result(transactionId);
        setContent(generateContent(response));
      } else if (code === 4) {
        const response = await ConnectAuth().result(transactionId);
        setContent(generateContent(response));
      } else {
        navigation.dispatch(popAction);
        
      }
    };
    checkResult();
  }, []);

  return (
    <ScrollView>
      <View style={styles.subMain}>
        <Text style={{fontSize: 20, color: '#000'}}>Result</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {firstPic ? (
            <Image
              style={{width: Dimensions.get('window').width * 0.5, height: Dimensions.get('window').width * 0.5, marginBottom: 10}}
              source={{
                uri: `data:image/png;base64,${firstPic}`,
              }}
            />
          ) : (
            ''
          )}
          {secondPic ? (
            <Image
              style={{width: Dimensions.get('window').width * 0.5, height: Dimensions.get('window').width * 0.5}}
              source={{
                uri: `data:image/png;base64,${secondPic}`,
              }}
            />
          ) : (
            ''
          )}
        </View>
        {content.length !== 0
          ? content.map((arr, idx) => (
              <View style={{marginTop: 10}} key={idx}>
                <TextParagraph>
                  {arr[0].toString()} :{' '}
                  {typeof arr[1] === 'object' ? (
                    <View>
                      {ConvertObjectToArray(arr[1]).map((data, id) => (
                        <Text>{`${data[0]} : ${data[1]}`}</Text>
                      ))}
                    </View>
                  ) : (
                    arr[1].toString()
                  )}
                </TextParagraph>
              </View>
            ))
          : ''}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
