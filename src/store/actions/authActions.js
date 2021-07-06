import instance from "./instance";
import * as actionTypes from "./actionTypes";
import decode from "jwt-decode";
// ACTIONS
export const signup = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", user);
      dispatch(setUser(res.data.token));
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
};
export const signin = (user, history) => {
  return async (dispatch) => {
    try {
      console.log(user);
      const res = await instance.post("/signin", user);
      dispatch(setUser(res.data.token));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
export const signout = () => {
  localStorage.removeItem("myToken");

  return {
    type: actionTypes.SET_USER,
    payload: null,
  };
};
export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) {
      return setUser(token);
    }
  }
  return setUser();
};
const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};
