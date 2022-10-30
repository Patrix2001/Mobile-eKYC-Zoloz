import {Linking, TouchableOpacity} from 'react-native';
import TextParagraph from '../atoms/TextParagraph';
import styles from '../../styles';

const TextLink = ({children, link}) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <TextParagraph customStyle={styles.textUnderline}>
        {children}
      </TextParagraph>
    </TouchableOpacity>
  );
};
export default TextLink;
