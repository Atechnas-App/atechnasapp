import { types } from "../actions/types";


export const authReducer =(state={},action)=>{
    switch(action.types){
    case types.login:
            return{
                ...action.payload,
                
            }
            case types.logout:
                return {}

                default:
                    return state;
        }
}