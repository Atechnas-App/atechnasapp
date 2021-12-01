import { GET_USER, SEARCH, CATEGORY_FILTER, GET_TECHNOLOGIES, TECHNOLOGY_FILTER, GET_CATEGORIES, POST_USER } from "../actions/types";


const initialState = {
    users:[],
    search:[],
    categories:[],
    filteredUsers:[],
    technologies:[]
};

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        
                case GET_USER:
                    
                    return {
                        ...state,
                        users: action.payload.content,
                    }

                case POST_USER:
                    return {
                        ...state,
                    }

                case SEARCH:

                    return {
                        ...state,
                        search: action.payload,

                    }
                    
                case CATEGORY_FILTER:
                    
                    return {
                        ...state,
                        search: action.payload,
                    }

                case GET_CATEGORIES:
                    return {
                        ...state,
                        categories: action.payload,
                        
                    }
                case GET_TECHNOLOGIES:
                    return {
                        ...state,
                        technologies: action.payload,
                        
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