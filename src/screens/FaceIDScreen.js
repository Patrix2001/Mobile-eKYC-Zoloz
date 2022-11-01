import {Button, ScrollView, View, NativeModules} from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import styles from '../styles';
import TextParagraph from '../components/atoms/TextParagraph';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';
import {FaceCapture} from '../helpers';
const {ZolozKit} = NativeModules;
import {captureLevel} from '../constants';

const FaceIDScreen = ({navigation}) => {
  const [metaInfo, setMetaInfo] = useState();
  const [level, setLevel] = useState();
  const [desc, setDesc] = useState('');

  ZolozKit.getMetaInfo(metainfo => setMetaInfo(metainfo));

  return (
    <ScrollView>
      <View style={styles.subMain}>
        <IntroFeatureLayout
          content="ZOLOZ Face Capture provides a digital online solution for capturing a user's selfie. It implements a face capture process that involves face liveness and face quality checks."
          link="https://docs.zoloz.com/zoloz/saas/apireference/facecapture"
          source="ZOLOZ Documentation - Face capture"
        />
        <View>
          <Picker
            selectedValue={level}
            mode={'dialog'}
            onValueChange={(item, idx) => {
              if (idx !== 0) {
                setLevel(item);
                setDesc(captureLevel[idx - 1].description);
              } else {
                setLevel();
                setDesc('');
              }
            }}>
            <Picker.Item label="Service Level" value="" />
            {captureLevel.map((arr, idx) => (
              <Picker.Item key={idx} label={arr.name} value={arr.name} />
            ))}
          </Picker>
          <TextParagraph>{desc}</TextParagraph>
        </View>
        <View style={{marginTop: 30}}>
          <Button
            title="Start"
            onPress={async () => {
              const result = await FaceCapture().init(metaInfo, level);
              const clientCfg = result.clientCfg;
              const id = result.transactionId;

              ZolozKit.start(clientCfg, {}, result => {
                if (result) {
                  navigation.replace('Profile', {
                    transactionId: id,
                    code: 1,
                  });
                }
              });
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FaceIDScreen;
