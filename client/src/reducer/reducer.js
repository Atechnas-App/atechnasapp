import { GET_USER, SEARCH, CATEGORY_FILTER, GET_TECHNOLOGIES, TECHNOLOGY_FILTER } from "../actions/types";

const initialState = {
    users:[],
    search:[],
    technologie:[]
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
                        search: action.payload,
                    }
                    
                case CATEGORY_FILTER:
                    return {
                        ...state,
                        search: action.payload.content,
                        users: action.payload.content
                    }
                case GET_TECHNOLOGIES:
                    return {
                        ...state,
                        technologie: action.payload.content,
                        
                    }

                case TECHNOLOGY_FILTER:
                    return {
                        ...state,
                        users: action.payload.content,
                        
                    }
                
                default:
                    return state;

    }
}