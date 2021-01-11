import { SET_ACTIVE_LINK } from "./types";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_LINK:
      return {
        ...state,
        activeLink: payload,
      };
    default:
      return state;
  }
};
