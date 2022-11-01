import {Button, ScrollView, View, NativeModules} from 'react-native';
import {useState} from 'react';
import styles from '../styles';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';
import {RealId} from '../helpers';
const {ZolozKit} = NativeModules;

const RealIDScreen = ({navigation}) => {
  const [metaInfo, setMetaInfo] = useState();
  ZolozKit.getMetaInfo(metainfo => setMetaInfo(metainfo));
  
  return (
    <ScrollView>
      <View style={styles.subMain}>
        <IntroFeatureLayout
          content="ZOLOZ Real ID provides a digital online solution for KYC (Know Your Customer). It implements an identity proofing process, which involves multiple capabilities of document verification, face verification and risk control."
          link="https://docs.zoloz.com/zoloz/saas/apireference/realid"
          source="ZOLOZ Documentation - Real ID"
        />
        <View style={{marginTop: 30}}>
          <Button
            title="Start"
            onPress={async () => {
              const result = await RealId().init(metaInfo);
              const clientCfg = result.clientCfg;
              const id = result.transactionId;

              ZolozKit.start(clientCfg, {}, result => {
                if (result) {
                  navigation.replace('Profile', {
                    transactionId: id,
                    code: 3,
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

export default RealIDScreen;
