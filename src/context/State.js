import React, { useReducer } from "react";
import Reducer from "./reducer";
import Context from "./context";
import {
  SET_ACTIVE_LINK,
  SET_LOADING,
  GET_GAMES,
  GET_ORIGAMIS,
  GET_QUIZES,
} from "./types";

const State = (props) => {
  const initialState = {
    activeLink: document.location.pathname,
    loading: false,
    games: [],
    origamis: [],
    quizes: [],
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

  // Get Origamis
  const getOrigamis = async () => {
    setLoading();

    const res = await fetch("/assets/origamis.json");
    const data = await res.json();

    dispatch({
      type: GET_ORIGAMIS,
      payload: data,
    });
  };

  // Get Quizes
  const getQuizes = async () => {
    setLoading();

    const res = await fetch("/assets/quizes.json");
    const data = await res.json();

    dispatch({
      type: GET_QUIZES,
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
        origamis: state.origamis,
        quizes: state.quizes,
        setActiveLink,
        getGames,
        getOrigamis,
        getQuizes,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
