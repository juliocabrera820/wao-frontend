import { SET_CURRENT_FEED } from "../types";

const reducer = (state, { type, payload }) => {
  console.log(state);
  console.log(payload);
  switch (type) {
    case SET_CURRENT_FEED:
      return { ...state, currentFeeds: [...state.currentFeeds, payload] };
    default:
      return state;
  }
};

export default reducer;
