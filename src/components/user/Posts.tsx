import React, { useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { useAppSelector } from '../../store';
import { PostCard } from '../PostCard';
import { Spacing } from '../Spacing';

type Props = {
  isActive: boolean;
};

export const Posts = (props: Props) => {
  const { isActive } = props;

  const currentUser = useAppSelector((state) => state.currentUser);
  const posts = useAppSelector((state) => state.posts);

  const postsForUser = useMemo(() => {
    return Object.values(posts)
      .filter((post) => post.user === currentUser.id)
      .sort((a, b) => b.createdDate - a.createdDate);
  }, []);

  if (!isActive) {
    return null;
  }

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContentContainer}
      showsVerticalScrollIndicator={false}
    >
      {postsForUser.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}

      <Spacing vertical={100} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  scrollViewContentContainer: {
    alignItems: 'center',
  },
});
