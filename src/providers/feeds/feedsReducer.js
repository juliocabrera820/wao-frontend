import { CLEAR_CURRENT_FEEDS, SET_CURRENT_FEED } from "../types";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_FEED:
      return { ...state, currentFeeds: [...state.currentFeeds, payload] };
    case CLEAR_CURRENT_FEEDS:
      return { currentFeeds: [] };
    default:
      return state;
  }
};

export default reducer;
