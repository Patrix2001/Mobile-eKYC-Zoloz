import {Button, ScrollView, View, NativeModules} from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import styles from '../styles';
import TextParagraph from '../components/atoms/TextParagraph';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';
import {RealId} from '../helpers';
const {ZolozKit} = NativeModules;
import {docTypes, realIdLevel, operationMode} from '../constants';

const RealIDScreen = ({navigation}) => {
  const [metaInfo, setMetaInfo] = useState();
  const [level, setLevel] = useState();
  const [doc, setDoc] = useState();
  const [descLevel, setDescLevel] = useState('');
  const [operation, setOperation] = useState();
  const [descOperation, setDescOperation] = useState('');

  ZolozKit.getMetaInfo(metainfo => setMetaInfo(metainfo));

  return (
    <ScrollView>
      <View style={styles.subMain}>
        <IntroFeatureLayout
          content="ZOLOZ Real ID provides a digital online solution for KYC (Know Your Customer). It implements an identity proofing process, which involves multiple capabilities of document verification, face verification and risk control."
          link="https://docs.zoloz.com/zoloz/saas/apireference/realid"
          source="ZOLOZ Documentation - Real ID"
        />
        <View>
          <Picker
            selectedValue={doc}
            mode={'dialog'}
            onValueChange={(item, idx) => {
              if (idx !== 0) {
                setDoc(item);
              } else {
                setDoc();
              }
            }}>
            <Picker.Item label="Document Type" value="" />
            {docTypes.map((arr, idx) => (
              <Picker.Item
                key={idx}
                label={`${arr.document}  (${arr.country})`}
                value={arr.docType}
              />
            ))}
          </Picker>
        </View>
        <View>
          <Picker
            selectedValue={level}
            mode={'dialog'}
            onValueChange={(item, idx) => {
              if (idx !== 0) {
                setLevel(item);
                setDescLevel(realIdLevel[idx - 1].description);
              } else {
                setLevel();
                setDescLevel('');
              }
            }}>
            <Picker.Item label="Service Level" value="" />
            {realIdLevel.map((arr, idx) => (
              <Picker.Item key={idx} label={arr.name} value={arr.name} />
            ))}
          </Picker>
          <TextParagraph>{descLevel}</TextParagraph>
        </View>
        <View>
          <Picker
            selectedValue={operation}
            mode={'dialog'}
            onValueChange={(item, idx) => {
              if (idx !== 0) {
                setOperation(item);
                setDescOperation(operationMode[idx - 1].description);
              } else {
                setOperation();
                setDescOperation('');
              }
            }}>
            <Picker.Item label="Operation Mode" value="" />
            {operationMode.map((arr, idx) => (
              <Picker.Item key={idx} label={arr.name} value={arr.name} />
            ))}
          </Picker>
          <TextParagraph>{descOperation}</TextParagraph>
        </View>
        <View style={{marginTop: 30}}>
          <Button
            title="Start"
            onPress={async () => {
              try {
                const result = await RealId().init(
                  metaInfo,
                  doc,
                  level,
                  operation,
                );
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
              } catch (error) {
                alert(error);
              }
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RealIDScreen;
