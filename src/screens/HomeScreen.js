import {Button, Text, View, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <View>
        <Text>Home</Text>
      </View>
      <View style={styles.sectionMenu}>
        <Button
          title="Face ID"
          color="#0ca8e6"
          onPress={() => navigation.navigate('Face ID')}
        />
      </View>
      <View style={styles.sectionMenu}>
        <Button
          title="Doc ID"
          color="#0ca8e6"
          onPress={() => navigation.navigate('Doc ID')}
        />
      </View>
      <View style={styles.sectionMenu}>
        <Button
          title="Real ID"
          color="#0ca8e6"
          onPress={() => navigation.navigate('Real ID')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionMenu: {
    flex: 0.17,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
export default HomeScreen;
