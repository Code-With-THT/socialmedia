import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useAppSelector} from "../src/store";
import {router} from 'expo-router';

const UserDetailPage = () => {
  const currentUser = useAppSelector(state => state.currentUser);

  const goBack = () => {
    router.back();
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={goBack}>
        <Text>go back</Text>
      </TouchableOpacity>
      <Text>
        USER DETAIL PAGE
      </Text>
      <Text>
        {currentUser.firstName} {currentUser.lastName} @{currentUser.username}
      </Text>
    </SafeAreaView>
  )
};

export default UserDetailPage;
