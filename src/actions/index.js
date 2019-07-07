import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => {
  const promise = jsonPlaceHolder.get("./posts");

  return {
    type: "FETCH_POSTS",
    payload: promise
  };
};
