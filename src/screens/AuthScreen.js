import {Button, ScrollView, View, NativeModules} from 'react-native';
import {useState} from 'react';
import styles from '../styles';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';
import {ConnectAuth} from '../helpers';
const {ZolozKit} = NativeModules;

const AuthScreen = ({navigation}) => {
  const [metaInfo, setMetaInfo] = useState();
  ZolozKit.getMetaInfo(metainfo => setMetaInfo(metainfo));

  return (
    <ScrollView>
      <View style={styles.subMain}>
        <IntroFeatureLayout
          content="ZOLOZ Connect provides a digital online solution for authentication. It implements a face verification process, which involves multiple capabilities of face liveness check and face comparison."
          link="https://docs.zoloz.com/zoloz/saas/apireference/connect"
          source="ZOLOZ Documentation - Connect"
        />
        <View style={{marginTop: 30}}>
          <Button
            title="Start"
            onPress={async () => {
              const result = await ConnectAuth().init(metaInfo);
              console.log(result)
              const clientCfg = result.clientCfg;
              const id = result.transactionId;

              ZolozKit.start(clientCfg, {}, result => {
                if (result) {
                  navigation.replace('Profile', {
                    transactionId: id,
                    code: 4,
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

export default AuthScreen;
