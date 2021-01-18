import {
  SET_ACTIVE_LINK,
  SET_LOADING,
  GET_GAMES,
  GET_ORIGAMIS,
  GET_QUIZES,
  GET_RIDDLES,
  GET_FACTS,
  GET_EXPERIMENTS,
  GET_ENGLISH,
} from "./types";

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
    case GET_QUIZES:
      return {
        ...state,
        quizes: payload,
        loading: false,
      };
    case GET_RIDDLES:
      return {
        ...state,
        riddles: payload,
        loading: false,
      };
    case GET_FACTS:
      return {
        ...state,
        facts: payload,
        loading: false,
      };
    case GET_EXPERIMENTS:
      return {
        ...state,
        experiments: payload,
        loading: false,
      };
    case GET_ENGLISH:
      return {
        ...state,
        english: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
