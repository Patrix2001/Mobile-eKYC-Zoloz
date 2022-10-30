import {ScrollView, View} from 'react-native';
import styles from '../styles';
import IntroFeatureLayout from '../components/templates/IntroFeatureLayout';

const AuthScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.subMain}>
        <IntroFeatureLayout
          content="ZOLOZ Connect provides a digital online solution for authentication. It implements a face verification process, which involves multiple capabilities of face liveness check and face comparison."
          link="https://docs.zoloz.com/zoloz/saas/apireference/connect"
          source="ZOLOZ Documentation - Connect"
        />
      </View>
    </ScrollView>
  );
};

export default AuthScreen;
