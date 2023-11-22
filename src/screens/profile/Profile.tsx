import { StyleSheet, View } from "react-native";

import { PostCard } from "../../components/PostCard";
import { UserInfo } from "../../components/user/UserInfo";
import { POSTS } from "../../data/posts";
import { USERS } from "../../data/users";

const Profile = () => {
  const myUser = USERS[0];
  const postsForUser = POSTS;

  return (
    <View style={styles.container}>
      {/* User Info Header */}
      <UserInfo user={myUser} />

      {/* Previous Posts */}
      <View style={styles.posts}>
        {postsForUser.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  posts: {
    height: "100%",
    alignItems: "center",
  },
});
