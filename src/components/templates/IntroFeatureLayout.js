import {View} from 'react-native';
import Article from '../organisms/Article';
import Citation from '../organisms/Citation';

const IntroFeatureLayout = ({content, link, source}) => {
  return (
    <View>
      <Article title="Description">{content}</Article>
      <Citation link={link}>{source}</Citation>
    </View>
  );
};

export default IntroFeatureLayout;
