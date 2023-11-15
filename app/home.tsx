import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {POSTS} from "../src/data/posts";
import {PostCard} from "../src/components/PostCard";
import { SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {POSTS.map(post => <PostCard post={post} key={post.id} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
  },
});
