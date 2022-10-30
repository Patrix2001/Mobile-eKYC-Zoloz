import {Button, View, StyleSheet} from 'react-native';
import styles from '../styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.sectionMenuButton}>
        <Button
          title="Face ID"
          color="#0ca8e6"
          onPress={() => navigation.navigate('Face ID')}
        />
      </View>
      <View style={styles.sectionMenuButton}>
        <Button
          title="Doc ID"
          color="#0ca8e6"
          onPress={() => navigation.navigate('Doc ID')}
        />
      </View>
      <View style={styles.sectionMenuButton}>
        <Button
          title="Real ID"
          color="#0ca8e6"
          onPress={() => navigation.navigate('Real ID')}
        />
      </View>
      <View style={styles.sectionMenuButton}>
        <Button
          title="Connect"
          color="#0ca8e6"
          onPress={() => navigation.navigate('Authenticate')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
