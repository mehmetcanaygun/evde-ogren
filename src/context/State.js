import React, { useReducer } from "react";
import Reducer from "./reducer";
import Context from "./context";
import {
  SET_ACTIVE_LINK,
  SET_LOADING,
  GET_GAMES,
  GET_ORIGAMIS,
  GET_QUIZES,
  GET_RIDDLES,
} from "./types";

const State = (props) => {
  const initialState = {
    activeLink: document.location.pathname,
    loading: false,
    games: [],
    origamis: [],
    quizes: [],
    riddles: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Shuffle Array
  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

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

  // Get Riddles
  const getRiddles = async () => {
    setLoading();

    const res = await fetch("/assets/riddles.json");
    const data = await res.json();

    dispatch({
      type: GET_RIDDLES,
      payload: shuffle(data),
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
        riddles: state.riddles,
        setActiveLink,
        getGames,
        getOrigamis,
        getQuizes,
        getRiddles,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
