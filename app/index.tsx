import {Redirect} from 'expo-router';
import {ROUTES} from "../src/routes";

export default function Page() {
  return <Redirect href={ROUTES.HOME} />
}
