import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
  const { data: payload } = await jsonPlaceHolder.get("./posts");
  dispatch({ type: "FETCH_POSTS", payload });
};

export const fetchUser = id => async dispatch => {
  const { data: payload } = await jsonPlaceHolder.get(`./users/${id}`);
  dispatch({ type: "FETCH_USER", payload });
};
