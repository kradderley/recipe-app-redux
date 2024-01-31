import { initialState } from "./initialState";
import { SET_RANDOM_RECIPE } from "./types";

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_RANDOM_RECIPE:
      return {
        ...state,
        recipes: payload,
      };

    default:
      console.log("Reducer ran");
      return initialState;
  }
};
