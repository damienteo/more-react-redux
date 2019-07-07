import _ from "lodash";

import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
  const { data: payload } = await jsonPlaceHolder.get("./posts");
  dispatch({ type: "FETCH_POSTS", payload });
};

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const { data: payload } = await jsonPlaceHolder.get(`./users/${id}`);
  dispatch({ type: "FETCH_USER", payload });
});
