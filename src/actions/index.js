import _ from "lodash";

import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const { data: payload } = await jsonPlaceHolder.get("./posts");
  dispatch({ type: "FETCH_POSTS", payload });
};

export const fetchUser = id => async dispatch => {
  const { data: payload } = await jsonPlaceHolder.get(`./users/${id}`);
  dispatch({ type: "FETCH_USER", payload });
};
