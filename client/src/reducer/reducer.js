import { GET_USER, SEARCH, CATEGORY_FILTER } from "../actions/types";

const initialState = {
    users:[],
    search:[],

};

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        
                case GET_USER:
                    
                    return {
                        ...state,
                        users: action.payload.content,
                        
                        
                    }
                    
                case SEARCH:

                    return {
                        ...state,
                        search: action.payload.content,
                    }

                case CATEGORY_FILTER:
                    return {
                        ...state,
                        search: action.payload,
                        users: action.payload
                    }
                default:
                    return state;

    }
}