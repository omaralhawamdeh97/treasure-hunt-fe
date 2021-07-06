import * as actionTypes from "../actions/actionTypes";

const initialState = {
  things: [],
  loading: true,
  treasures: [],
  fetch: true,
};

const thingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GARBAGE:
      return {
        ...state,
        things: action.payload,
        loading: false,
      };
    case actionTypes.FETCH_TREASURES:
      return {
        ...state,
        treasures: action.payload,
        loading: false,
        fetch: false,
      };
    default:
      return state;
  }
};

export default thingsReducer;
