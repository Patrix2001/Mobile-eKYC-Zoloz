import {View} from 'react-native';
import TextParagraph from '../atoms/TextParagraph';
import TextHeading from '../atoms/TextHeading';

const Article = ({title, children}) => {
  return (
    <View>
      <TextHeading>{title}</TextHeading>
      <TextParagraph>{children}</TextParagraph>
    </View>
  );
};

export default Article;
