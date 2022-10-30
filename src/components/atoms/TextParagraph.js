import {Text} from 'react-native';
import styles from '../../styles';

const TextParagraph = ({children, customStyle}) => {
  return <Text style={[styles.baseText, customStyle]}>{children}</Text>;
};
export default TextParagraph;
