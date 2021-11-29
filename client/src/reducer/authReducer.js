import { types } from "../actions/types";


export const authReducer =(state={},action)=>{
    switch(action.types){
    case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName,
                email: action.payload.email,
                photoURL: action.payload.photoURL,                
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