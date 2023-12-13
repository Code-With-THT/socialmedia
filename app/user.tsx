import { router } from 'expo-router';
import { StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../src/components/Header';
import { Posts } from '../src/components/user/Posts';
import { UserInfo } from '../src/components/user/UserInfo';
import { ROUTES } from '../src/routes';
import { useAppSelector } from '../src/store';

const MESSAGE_URL = Image.resolveAssetSource(
  require('../assets/message.png'),
).uri;

const UserDetailPage = () => {
  const currentUser = useAppSelector((state) => state.currentUser);

  const goBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeAreaView} edges={['top']}>
      <Header
        leftButton={{ onPress: goBack }}
        showLogo
        rightButton={{
          child: (
            <Image source={{ uri: MESSAGE_URL }} style={styles.messageIcon} />
          ),
          onPress: () => router.push(ROUTES.MESSAGE_THREAD),
        }}
      />

      <View style={styles.main}>
        {/* User Info */}
        <UserInfo user={currentUser} />

        <Posts isActive />
      </View>
    </SafeAreaView>
  );
};

export default UserDetailPage;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  main: {
    paddingTop: 5,
  },
  messageIcon: {
    width: 20,
    height: 20,
  },
});
