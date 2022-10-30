import {ScrollView, View} from 'react-native';
import styles from '../styles';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';

const FaceIDScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.subMain}>
        <IntroFeatureLayout
          content="ZOLOZ Face Capture provides a digital online solution for capturing a user's selfie. It implements a face capture process that involves face liveness and face quality checks."
          link="https://docs.zoloz.com/zoloz/saas/apireference/facecapture"
          source="ZOLOZ Documentation - Face capture"
        />
      </View>
    </ScrollView>
  );
};

export default FaceIDScreen;
