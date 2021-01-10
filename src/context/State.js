import React, { useReducer } from "react";
import Reducer from "./reducer";
import Context from "./context";
import { TEST } from "./types";

const State = (props) => {
  const initialState = {
    test: true,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const changeTest = () => {
    dispatch({
      type: TEST,
    });
  };

  return (
    <Context.Provider
      value={{
        test: state.test,
        changeTest,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
