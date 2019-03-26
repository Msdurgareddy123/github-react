import { FETCH_POSTS,FETCH_POSTS2, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://api.github.com/users/supreetsingh247')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const fetchPosts2 = () => dispatch => {
  fetch('https://api.github.com/users/supreetsingh247/repos')
    .then(res => res.json())
    .then(posts2 =>
      dispatch({
        type: FETCH_POSTS2,
        payload: posts2
      })
    );
};
