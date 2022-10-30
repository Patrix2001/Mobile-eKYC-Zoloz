import {View} from 'react-native';
import styles from '../styles';
import Citation from '../components/organisms/Citation';
import Article from '../components/organisms/Article';

const FaceIDScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.subMain}>
        <View>
          <Article title="Description">
            ZOLOZ Face Capture provides a digital online solution for capturing
            a user's selfie. It implements a face capture process that involves
            face liveness and face quality checks.
          </Article>
          <Citation link="https://docs.zoloz.com/zoloz/saas/apireference/facecapture">
            ZOLOZ Documentation - Face capture
          </Citation>
        </View>
      </View>
    </>
  );
};

export default FaceIDScreen;
