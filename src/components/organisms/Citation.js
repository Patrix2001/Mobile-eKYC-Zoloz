import {View} from 'react-native';
import TextLink from '../molecules/TextLink';
import TextParagraph from '../atoms/TextParagraph';

const Citation = ({children, link}) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <TextParagraph>Source: </TextParagraph>
      <TextLink link={link}>{children}</TextLink>
    </View>
  );
};

export default Citation;
