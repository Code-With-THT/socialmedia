import { Slot } from 'expo-router';
import { Provider } from 'react-redux';

import { CreatePostModal } from '../src/components/createPostModal';
import store from '../src/store';

export default Layout = () => {
  return (
    <Provider store={store}>
      <Slot />
      <CreatePostModal />
    </Provider>
  );
};
