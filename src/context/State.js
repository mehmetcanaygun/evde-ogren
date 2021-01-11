import React, { useReducer } from "react";
import Reducer from "./reducer";
import Context from "./context";
import { SET_ACTIVE_LINK } from "./types";

const State = (props) => {
  const initialState = {
    activeLink: document.location.pathname,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Set Active Link
  const setActiveLink = (path) => {
    dispatch({
      type: SET_ACTIVE_LINK,
      payload: path,
    });
  };

  return (
    <Context.Provider
      value={{
        activeLink: state.activeLink,
        setActiveLink,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
