import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/reducer.js";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  rootReducer
});

const store = createStore(reducers,
    composeEnhancers(applyMiddleware(thunk)));

export default store;
