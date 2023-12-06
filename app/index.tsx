import { Redirect } from 'expo-router';

import { ROUTES } from '../src/routes';

const AppEntry = () => {
  return <Redirect href={ROUTES.ROOT} />;
};

export default AppEntry;
