import auth from '@react-native-firebase/auth';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { ROUTES } from '../src/routes';
import { useAppDispatch } from '../src/store';
import { logInUserThunk } from '../src/store/thunks/user-thunk';

const Root = () => {
  const dispatch = useAppDispatch();

  const goToSignUp = () => router.push(ROUTES.SIGN_UP);
  const goToApp = () => router.push(ROUTES.HOME);

  useEffect(() => {
    if (auth().currentUser?.email) {
      dispatch(
        logInUserThunk({
          email: auth().currentUser?.email || '',
          onSuccess: goToApp,
          onError: goToSignUp,
        }),
      );
    }
  }, []);

  return (
    <View>
      <Text>Root</Text>
    </View>
  );
};

export default Root;
