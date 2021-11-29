import { GET_USER, POST_USER, SEARCH, CATEGORY_FILTER, GET_CATEGORIES } from "../actions/types";

const initialState = {
    users:[],
    search:[],
    categories:[],
    // filteredUsers:[],
};

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        
                case GET_USER:
                    
                    return {
                        ...state,
                        users: action.payload.content,
                        // search: action.payload.content, 
                        
                    }

                case POST_USER:
                    return {
                        ...state,
                    }

                case SEARCH:

                    return {
                        ...state,
                        search: action.payload.content,
                        // users: action.payload.content
                    }

                case CATEGORY_FILTER:
                    return {
                        ...state,
                        users: action.payload.content,
                    }

                case GET_CATEGORIES:
                    return {
                        ...state,
                        categories: action.payload,
                    }
                default:
                    return state;

    }
}