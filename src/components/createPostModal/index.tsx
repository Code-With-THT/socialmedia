import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Modal from 'react-native-modal';

import { DescriptionInput } from './inputs/DescriptionInput';
import { useAppDispatch, useAppSelector } from '../../store';
import { PostBuilderActions } from '../../store/features/postBuilder';
import { createPostThunk } from '../../store/thunks/currentPost-thunk';
import { ButtonText } from '../ButtonText';
import { ContinueButton } from '../ContinueButton';
import { Spacing } from '../Spacing';

export const CreatePostModal = () => {
  const dispatch = useAppDispatch();

  const { isPostModalOpen } = useAppSelector((state) => state.postBuilder);

  const closeModal = () =>
    dispatch(PostBuilderActions.setIsPostModalOpen(false));

  const createPost = () => {
    const onSuccess = () => {
      dispatch(PostBuilderActions.setIsPostModalOpen(false));
    };

    const onError = () => {
      Alert.alert(
        'Could not create post',
        'Please close the app and try again',
      );
    };

    dispatch(createPostThunk(onSuccess, onError));
  };

  return (
    <Modal
      isVisible={isPostModalOpen}
      style={styles.modal}
      onBackdropPress={closeModal}
    >
      <View style={styles.content}>
        <Spacing vertical={5} />

        <Text style={styles.header}>Add/Edit Post</Text>

        <Spacing vertical={5} />

        <DescriptionInput />

        <Spacing vertical={10} />

        <ContinueButton
          child={<ButtonText text="Create Post" />}
          onPress={createPost}
          buttonStyles={styles.createButton}
        />

        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    top: -100,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    height: 280,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  createButton: {
    width: 320,
  },
  closeButton: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
