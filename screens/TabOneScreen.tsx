import { ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Post from '../components/post';
import PostTabs from '../components/PostTabs';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  let postContent = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';
  let realName = 'Real Name';
  let feedName = 'Feed Name';
  let dp = 'https://i.picsum.photos/id/866/536/354.jpg';

  console.log(dp);
  return (
    <View style={styles.container}>
      <PostTabs></PostTabs>
      <ScrollView style={{ width: '100%' }}>
        <Post
          PostContent={postContent}
          DisplayPicture={dp}
          RealName={realName}
          FeedName={feedName}
          CommentNum={2}
          Expanded={false}
        />
         <Post
          PostContent={postContent}
          DisplayPicture={dp}
          RealName={realName}
          FeedName={feedName}
          CommentNum={2}
          Expanded={false}
        />
        

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: '1em',
    // paddingHorizontal: '1em'

  }
});
