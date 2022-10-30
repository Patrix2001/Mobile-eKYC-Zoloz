import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: 'white',
    paddingTop: Dimensions.get('window').width * 0.2,
  },
  subMain: {
    height: '100%',
    backgroundColor: 'white',
    paddingTop: Dimensions.get('window').width * 0.07,
    paddingHorizontal: Dimensions.get('window').width * 0.05,
    paddingBottom: Dimensions.get('window').width * 0.3,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionMenuButton: {
    flex: 0.2,
    width: '64%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  baseText: {
    color: 'black',
    fontSize: 15,
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
});
