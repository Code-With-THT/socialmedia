import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {Post} from "../model/post";
import {USERS} from "../data/users";
import {router} from 'expo-router';
import {ROUTES} from "../routes";
import {useAppDispatch} from "../store";
import {CurrentPostActions} from "../store/features/currentPost";

type Props = {
  post: Post;
};

export const PostCard = (props: Props) => {
  const {post} = props;
  const dispatch = useAppDispatch();

  const userInfo = USERS.find(user => user.id === post.user);

  const goToPostDetailPage = () => {
    dispatch(CurrentPostActions.setCurrentPost(post));

    router.push(ROUTES.POST);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToPostDetailPage}>
      <View style={styles.photoContainer}>
        <View style={styles.photo} />
      </View>

      <View style={styles.content}>
        <Text>{userInfo?.firstName} {userInfo?.lastName} @{userInfo?.username}</Text>
        <Text>{post.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '90%',
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  photoContainer: {
    height: '100%',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    height: 40,
    width: 40,
    backgroundColor: 'blue',
    borderRadius: 20,
  },
  content: {
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
  },
});
