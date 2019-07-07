import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
  const { data: payload } = await jsonPlaceHolder.get("./posts");
  dispatch({ type: "FETCH_POSTS", payload });
};
