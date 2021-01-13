import React, { useReducer } from "react";
import Reducer from "./reducer";
import Context from "./context";
import { SET_ACTIVE_LINK, SET_LOADING, GET_GAMES } from "./types";

const State = (props) => {
  const initialState = {
    activeLink: document.location.pathname,
    loading: false,
    games: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Set Active Link
  const setActiveLink = (path) => {
    dispatch({
      type: SET_ACTIVE_LINK,
      payload: path,
    });
  };

  // Get Games
  const getGames = async () => {
    setLoading();

    const res = await fetch("/assets/games.json");
    const data = await res.json();

    dispatch({
      type: GET_GAMES,
      payload: data,
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <Context.Provider
      value={{
        activeLink: state.activeLink,
        loading: state.loading,
        games: state.games,
        setActiveLink,
        getGames,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
