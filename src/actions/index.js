import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
  const payload = await jsonPlaceHolder.get("./posts");
  dispatch({ type: "FETCH_POSTS", payload });
};
