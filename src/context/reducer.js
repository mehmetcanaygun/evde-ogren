import { SET_ACTIVE_LINK, SET_LOADING, GET_GAMES, GET_ORIGAMIS } from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_LINK:
      return {
        ...state,
        activeLink: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_GAMES:
      return {
        ...state,
        games: payload,
        loading: false,
      };
    case GET_ORIGAMIS:
      return {
        ...state,
        origamis: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
