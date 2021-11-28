import { types } from "../actions/types";


export const authReducer =(state={},action)=>{
    switch(action.types){
    case types.login:
            return{
                ...action.payload,
                login: true
            }
            case types.logout:
                return {
                    login: false
                }

                default:
                    return state;
        }
} 