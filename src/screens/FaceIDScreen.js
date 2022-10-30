import {Text, View, TouchableOpacity, Linking} from 'react-native';
import styles from '../styles';
import Citation from '../components/organisms/Citation';
const FaceIDScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.subMain}>
        <View>
          <View>
            <Text style={styles.headingOne}>Description</Text>
            <Citation link="https://egghead.io">
              ZOLOZ Fac Capture provides a digital online solution for capturing
              a user's selfie. It implements a face capture process that
              involves face liveness and face quality checks.
            </Citation>
          </View>
          <View style={styles.sectionCitation}>
            <Text>Source: </Text>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://egghead.io')}>
              <Text>https://egghead.io/</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default FaceIDScreen;
