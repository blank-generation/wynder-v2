import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Post from '../components/post';
import Comment from '../components/Comment'

let postContent = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';
let realName = 'Real Name';
let feedName = 'Feed Name';
let dp = 'https://i.picsum.photos/id/866/536/354.jpg';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%', paddingBottom: '3em' }}>
        <Post
          PostContent={postContent}
          DisplayPicture={dp}
          RealName={realName}
          FeedName={feedName}
          CommentNum={2}
          Expanded={true}
        />
        <Comment
          Content="why momos dragon fruit was a failure I do not know"
          DisplayPicture={dp}
          FeedName="Jav"
          CommentNum={2}
          Expanded={true}
          Me={false}
        />
        <Comment
          Content="why momos dragon fruit was a failure I do not know"
          DisplayPicture={dp}
          FeedName="Jav"
          CommentNum={2}
          Expanded={true}
          Me={true}
        />
        <Comment
          Content="why momos dragon fruit was a failure I do not know"
          DisplayPicture={dp}
          FeedName="Jav"
          CommentNum={2}
          Expanded={true}
          Me={false}
          Reported= {true}
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
