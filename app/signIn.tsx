import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppInput } from '../src/components/AppInput';
import { ButtonText } from '../src/components/ButtonText';
import { ContinueButton } from '../src/components/ContinueButton';
import { Header } from '../src/components/Header';
import { InputLabel } from '../src/components/InputLabel';
import { Spacing } from '../src/components/Spacing';
import { ROUTES } from '../src/routes';
import { useAppDispatch, useAppSelector } from '../src/store';
import { UserActions } from '../src/store/features/user';
import { signInThunk } from '../src/store/thunks/user-thunk';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const [password, setPassword] = useState('');

  const createAccount = () => {
    const onSuccess = () => router.push(ROUTES.HOME);

    const onError = () =>
      Alert.alert('Could not create account', 'Please try again');

    dispatch(signInThunk({ password, onSuccess, onError }));
  };

  return (
    <SafeAreaView edges={['top']}>
      <Header showLogo />

      <View style={styles.main}>
        <Text style={styles.heading}>Welcome to Social Media App</Text>
      </View>

      <Spacing vertical={5} />

      <View style={styles.elementContainer}>
        <InputLabel text="Email" />
        <AppInput
          value={user.email}
          onChangeText={(text) => dispatch(UserActions.setEmail(text))}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <Spacing vertical={5} />

      <View style={styles.elementContainer}>
        <InputLabel text="Password" />
        <AppInput
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </View>

      <Spacing vertical={10} />

      <View style={styles.elementContainer}>
        <ContinueButton
          child={<ButtonText text="Sign In" />}
          onPress={createAccount}
        />
      </View>

      <Spacing vertical={10} />

      <TouchableOpacity
        style={styles.elementContainer}
        onPress={() => router.push(ROUTES.SIGN_UP)}
      >
        <Text style={styles.goToSignInText}>Don't have an account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  main: {},
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
    marginTop: 10,
  },
  elementContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  goToSignInText: {
    alignSelf: 'center',
  },
});
