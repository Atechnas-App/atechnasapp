import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/reducer.js";
import thunk from "redux-thunk";
import {authReducer} from "../reducer/authReducer"
import { logReducer } from "../reducer/logReducer.js";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  log : logReducer,
  rootReducer,
});

const store = createStore(reducers,
    composeEnhancers(applyMiddleware(thunk)));

export default store;
