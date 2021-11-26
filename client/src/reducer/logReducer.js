import { types } from "../actions/types";

const initialState = {
    login: false,
    msgError: null,
}

export const logReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.startLoding:
        return {
          ...state,
          login: true,
        };
      case types.finishLoding:
        return {
          ...state,
          login: false,
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
      default:
        return state;
    }
}