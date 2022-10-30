import {ScrollView, View} from 'react-native';
import styles from '../styles';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';

const RealIDScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.subMain}>
        <IntroFeatureLayout
          content="ZOLOZ Real ID provides a digital online solution for KYC (Know Your Customer). It implements an identity proofing process, which involves multiple capabilities of document verification, face verification and risk control."
          link="https://docs.zoloz.com/zoloz/saas/apireference/realid"
          source="ZOLOZ Documentation - Real ID"
        />
      </View>
    </ScrollView>
  );
};

export default RealIDScreen;
