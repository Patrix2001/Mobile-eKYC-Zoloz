import {Button, ScrollView, View, NativeModules} from 'react-native';
import {useState} from 'react';
import styles from '../styles';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';
import {FaceCapture} from '../helpers';
const {ZolozKit} = NativeModules;

const FaceIDScreen = ({navigation}) => {
  const [metaInfo, setMetaInfo] = useState();
  ZolozKit.getMetaInfo(metainfo => setMetaInfo(metainfo));

  return (
    <ScrollView>
      <View style={styles.subMain}>
        <IntroFeatureLayout
          content="ZOLOZ Face Capture provides a digital online solution for capturing a user's selfie. It implements a face capture process that involves face liveness and face quality checks."
          link="https://docs.zoloz.com/zoloz/saas/apireference/facecapture"
          source="ZOLOZ Documentation - Face capture"
        />
        <View style={{marginTop: 30}}>
          <Button
            title="Start"
            onPress={async () => {
              const result = await FaceCapture().init(metaInfo);
              console.log(result)
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
