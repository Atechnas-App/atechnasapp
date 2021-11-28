import { GET_USER, POST_USER, SEARCH, CATEGORY_FILTER, GET_CATEGORIES } from "../actions/types";

const initialState = {
    users:[],
    search:[],
    categories:[],
};

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        
                case GET_USER:
                    return {
                        ...state,
                        users: action.payload,
                        search: action.payload
                       
                    }

                case POST_USER:
                    return {
                        ...state,
                    }

                case SEARCH:

                    return {
                        ...state,
                        search: action.payload
                    }

                case CATEGORY_FILTER:
                    return {
                        ...state,
                        search: action.payload,
                        users: action.payload
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