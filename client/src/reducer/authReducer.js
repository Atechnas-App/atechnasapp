import { types } from "../actions/types";  

const initialState = {
  logued:{log:false},
  user:{},
};


export const authReducer =(state= initialState,action)=>{
    switch(action.type) {
      case types.login:
        return {
          ...state,
          logued: {log : true},
          user: action.payload,
        };

      case types.logout:
        return {
          ...state,
          logued: {log: false},
          user:action.payload,
        };
     

      default:
        return state;
    }
} 