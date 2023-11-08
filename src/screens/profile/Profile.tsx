import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {USERS} from '../../data/users';
import {POSTS} from '../../data/posts';
import {PostCard} from '../../components/PostCard';

const Profile = () => {
  const myUser = USERS[0];
  const postsForUser = POSTS;

  return (
    <View style={styles.container}>
      {/* User Info Header */}
      <View style={styles.topInfo}>
        {/* Photo Column */}
        <View style={styles.imageColumn}>
          <View style={styles.photo} />
        </View>

        {/* User Info Column */}
        <View style={styles.userInfoColumn}>
          <Text style={styles.name}>{myUser.firstName} {myUser.lastName}</Text>
          <Text style={styles.username}>@{myUser.username}</Text>
          <Text style={styles.bio}>{myUser.bio}</Text>  
        </View>
      </View>

      {/* Previous Posts */}
      <View style={styles.posts}>
        {postsForUser.map(post => <PostCard post={post} key={post.id} />)}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  topInfo: {
    height: 150,
    flexDirection: 'row',
  },
  imageColumn: {
    height: '100%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfoColumn: {
    height: '100%',
    width: '75%',
    justifyContent: 'center',
  },
  photo: {
    height: 80,
    width: 80,
    backgroundColor: 'blue',
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
  username: {
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  bio: {
    fontSize: 13,
    fontWeight: '300',
    marginTop: 5,
  },
  posts: {
    height: '100%',
    alignItems: 'center',
  },
});
