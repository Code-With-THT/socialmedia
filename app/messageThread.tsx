import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../src/components/Header';
import { useAppDispatch, useAppSelector } from '../src/store';
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const MessageThread = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.messages);
  const messageThreads = useAppSelector((state) => state.messageThreads);
  const user = useAppSelector((state) => state.user);
  const currentUser = useAppSelector((state) => state.currentUser);

  const [message, setMessage] = useState('');
  const inputY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: inputY.value }],
    };
  });

  const existingThread = useMemo(() => {
    return Object.values(messageThreads).find((thread) => {
      return (
        thread.users.includes(user.id) && thread.users.includes(currentUser.id)
      );
    });
  }, []);

  const goBack = () => router.back();

  const onInputFocus = () => {};

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header leftButton={{ onPress: goBack }} showLogo />
      {!existingThread && <Text>No messages yet</Text>}

      <TextInput
        value={message}
        onChangeText={(text) => setMessage(text)}
        style={[styles.input, animatedStyles]}
        onFocus={}
      />
    </SafeAreaView>
  );
};

export default MessageThread;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    width: '90%',
    backgroundColor: 'red'
  }
});
