import { useReducer } from "react";
import feedsReducer from "./feedsReducer";
import { feedsContext } from "./feedsContext";
import { SET_CURRENT_FEED } from "../types";

const FeedsState = ({ children }) => {
  const initialState = {
    currentFeeds: [],
  };

  const [state, dispatch] = useReducer(feedsReducer, initialState);

  const setCurrentFeed = (feed) => {
    dispatch({
      type: SET_CURRENT_FEED,
      payload: feed,
    });
  };

  return (
    <feedsContext.Provider
      value={{
        currentFeeds: state.currentFeeds,
        setCurrentFeed,
      }}
    >
      {children}
    </feedsContext.Provider>
  );
};

export default FeedsState;
