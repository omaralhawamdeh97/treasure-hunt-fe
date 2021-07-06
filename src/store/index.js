import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { checkForToken } from "./actions/authActions.js";
import { fetchGarbage } from "./actions/thingsAuctions.js";
import bigR from "./reducers.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(bigR, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForToken());
store.dispatch(fetchGarbage());
export default store;
