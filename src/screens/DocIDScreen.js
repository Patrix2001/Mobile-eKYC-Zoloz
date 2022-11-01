import {Button, ScrollView, View, NativeModules} from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import styles from '../styles';
import TextParagraph from '../components/atoms/TextParagraph';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';
import {IdRecognition} from '../helpers';
const {ZolozKit} = NativeModules;
import {docTypes, recognitionLevel} from '../constants';

const DocIDScreen = ({navigation}) => {
  const [desc, setDesc] = useState();
  const [doc, setDoc] = useState();
  const [level, setLevel] = useState();
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
                setDesc(recognitionLevel[idx - 1].description);
              } else {
                setLevel();
                setDesc('');
              }
            }}>
            <Picker.Item label="Service Level" value="" />
            {recognitionLevel.map((arr, idx) => (
              <Picker.Item key={idx} label={arr.name} value={arr.name} />
            ))}
          </Picker>
          <TextParagraph>{desc}</TextParagraph>
        </View>
        <View style={{marginTop: 30}}>
          <Button
            title="Start"
            onPress={async () => {
              const result = await IdRecognition().init(metaInfo, doc, level);
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
