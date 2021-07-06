import * as actionTypes from "./actionTypes";
import instance from "./instance";
// ACTIONS

export const fetchGarbage = () => {
  return async (dispatch) => {
    try {
      console.log("actions");
      const res = await instance.get("/things/garbages");
      dispatch({
        type: actionTypes.FETCH_GARBAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTreasures = () => {
  return async (dispatch) => {
    try {
      console.log("actions");
      const res = await instance.get("/things/treasures");
      dispatch({
        type: actionTypes.FETCH_TREASURES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
