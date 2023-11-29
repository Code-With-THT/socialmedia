import React, { useMemo } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ButtonText } from '../src/components/ButtonText';
import { ContinueButton } from '../src/components/ContinueButton';
import { Header } from '../src/components/Header';
import { PostCard } from '../src/components/PostCard';
import { Spacing } from '../src/components/Spacing';
import { useAppDispatch, useAppSelector } from '../src/store';
import { createPostThunk } from '../src/store/thunks/currentPost-thunk';

const Home = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);

  /**
   * START HERE:
   * 1. Post does not show automatically - need to refresh
   * 2. Post does not show User
   * 3. Retrieve posts on auto-login
   */
  const postsToShow = useMemo(() => {
    return Object.values(posts).sort((a, b) => b.createdDate - a.createdDate);
  }, []);

  const createPost = () => {
    dispatch(createPostThunk());
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header showLogo />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {postsToShow.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}

        <Spacing vertical={100} />
      </ScrollView>

      <ContinueButton
        child={<ButtonText text="Create Post" />}
        onPress={createPost}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  scrollView: {},
  scrollViewContentContainer: {
    alignItems: 'center',
  },
});
