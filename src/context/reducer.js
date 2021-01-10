import { TEST } from "./types";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TEST:
      return {
        test: !state.test,
      };
    default:
      return state;
  }
};
