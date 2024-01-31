import { initialState } from "./initialState";
import { ONE_API } from "./types";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ONE_API:
      break;

    default:
      return initialState;
  }
};
