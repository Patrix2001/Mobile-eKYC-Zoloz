import {Text} from 'react-native';
import styles from '../../styles';

const TextHeading = ({children, customStyle}) => {
  return <Text style={[styles.heading, customStyle]}>{children}</Text>;
};
export default TextHeading;
