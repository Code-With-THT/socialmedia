import { Redirect } from "expo-router";
import { useEffect } from "react";

import { POSTS } from "../src/data/posts";
import { ROUTES } from "../src/routes";
import { useAppDispatch } from "../src/store";
import { PostsActions } from "../src/store/features/posts";

const Root = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(PostsActions.addPosts(POSTS));
  }, []);

  return <Redirect href={ROUTES.HOME} />;
};

export default Root;
