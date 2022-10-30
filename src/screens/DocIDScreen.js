import {ScrollView, View} from 'react-native';
import styles from '../styles';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';

const DocIDScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.subMain}>
        <IntroFeatureLayout
          content="ZOLOZ ID recognition provides the Optical Character Recognition (OCR) functionality for most of documents like passport, ID card and driving license, etc., along with the anti-spoofing results for the documents."
          link="https://docs.zoloz.com/zoloz/saas/apireference/utcp2w"
          source="ZOLOZ Documentation - ID recognition"
        />
      </View>
    </ScrollView>
  );
};

export default DocIDScreen;
