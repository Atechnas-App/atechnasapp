import { types } from "../actions/types";


export const authReducer =(state={},action)=>{
    switch(action.types){
    case types.login:
            return{
                uid: action.payload.type,
                name: action.payload.displayName,
                email: action.payload.email,
                photo: action.payload.photoURL,

            }
            case types.logout:
                return {}

                default:
                    return state;
        }
}