import { types } from "../actions/types";

const initialState = {
  login: false,
  msgError: null,
  msgError1: null,
  auth: false,
};

export const logReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.startLoding:
        return {
          ...state,
          auth: true,
        };
      case types.finishLoding:
        return {
          ...state,
          auth: false,
        };
      case types.setError:
        return {
          ...state,
          msgError: action.payload,
        };
      case types.removeError:
        return {
          ...state,
          msgError: null,
        };
      case types.loginPost:
        return {
          ...state,
          payload: action.payload,
        };
      case types.setError1:
        return {
          ...state,
          msgError1: action.payload,
        };
      case types.removeError1:
        return {
          ...state,
          msgError1: null,
        };
      default:
        return state;
    }
}