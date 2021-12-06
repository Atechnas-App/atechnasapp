import { types } from "../actions/types";  

const initialState = {
  isAuthenticated: false,
  user: {}
};


export const authReducer =(state= initialState,action)=>{
    switch (action.types) {
      case types.login:
        return {
          ...action.payload,
          isAuthenticated: true,
        };

      case types.logout:
        return {
          isAuthenticated: false,
        };
     

      default:
        return state;
    }
} 