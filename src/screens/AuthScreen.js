import {Button, ScrollView, View, NativeModules} from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import styles from '../styles';
import TextParagraph from '../components/atoms/TextParagraph';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';
import {ConnectAuth} from '../helpers';
const {ZolozKit} = NativeModules;
import {connnectLevel} from '../constants';

const AuthScreen = ({navigation}) => {
  const [metaInfo, setMetaInfo] = useState();
  const [level, setLevel] = useState();
  const [desc, setDesc] = useState('');

  ZolozKit.getMetaInfo(metainfo => setMetaInfo(metainfo));

  return (
    <ScrollView>
      <View style={styles.subMain}>
        <IntroFeatureLayout
          content="ZOLOZ Connect provides a digital online solution for authentication. It implements a face verification process, which involves multiple capabilities of face liveness check and face comparison."
          link="https://docs.zoloz.com/zoloz/saas/apireference/connect"
          source="ZOLOZ Documentation - Connect"
        />
        <View>
          <Picker
            selectedValue={level}
            mode={'dialog'}
            onValueChange={(item, idx) => {
              if (idx !== 0) {
                setLevel(item);
                setDesc(connnectLevel[idx - 1].description);
              } else {
                setLevel();
                setDesc('');
              }
            }}>
            <Picker.Item label="Service Level" value="" />
            {connnectLevel.map((arr, idx) => (
              <Picker.Item key={idx} label={arr.name} value={arr.name} />
            ))}
          </Picker>
          <TextParagraph>{desc}</TextParagraph>
        </View>
        <View style={{marginTop: 30}}>
          <Button
            title="Start"
            onPress={async () => {
              const result = await ConnectAuth().init(metaInfo, level);
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
