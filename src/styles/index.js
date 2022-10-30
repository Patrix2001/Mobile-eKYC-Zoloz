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
  },
  headingOne: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionCitation: {
    flexDirection: 'row',
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
