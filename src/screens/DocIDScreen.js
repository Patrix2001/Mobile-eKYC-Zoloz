import {Button, ScrollView, View, NativeModules} from 'react-native';
import {useState} from 'react';
import styles from '../styles';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';
import {IdRecognition} from '../helpers';
const {ZolozKit} = NativeModules;

const DocIDScreen = ({navigation}) => {
  const [metaInfo, setMetaInfo] = useState();
  ZolozKit.getMetaInfo(metainfo => setMetaInfo(metainfo));
  
  return (
    <ScrollView>
      <View style={styles.subMain}>
        <IntroFeatureLayout
          content="ZOLOZ ID recognition provides the Optical Character Recognition (OCR) functionality for most of documents like passport, ID card and driving license, etc., along with the anti-spoofing results for the documents."
          link="https://docs.zoloz.com/zoloz/saas/apireference/utcp2w"
          source="ZOLOZ Documentation - ID recognition"
        />
        <View style={{marginTop: 30}}>
          <Button
            title="Start"
            onPress={async () => {
              const result = await IdRecognition().init(metaInfo);
              const clientCfg = result.clientCfg;
              const id = result.transactionId;

              ZolozKit.start(clientCfg, {}, result => {
                if (result) {
                  navigation.replace('Profile', {
                    transactionId: id,
                    code: 2,
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

export default DocIDScreen;
