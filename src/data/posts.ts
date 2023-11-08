import {Post} from "../model/post";

const MILLISECONDS_IN_HOUR = 3600000;

export const POSTS: Post[] = [
  {
    id: 'PostA',
    user: 'User1',
    text: 'This is my first post!',
    createdDate: Date.now(),
  },
  {
    id: 'PostB',
    user: 'User1',
    text: 'This is my second post!',
    createdDate: Date.now() - MILLISECONDS_IN_HOUR,
  },
];