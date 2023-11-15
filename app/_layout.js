import { Provider } from 'react-redux';
import store from '../src/store';
import { Slot } from 'expo-router';

export default Layout = () => {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
};
