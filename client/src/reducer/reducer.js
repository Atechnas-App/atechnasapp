import { GET_USER, SEARCH, CATEGORY_FILTER, GET_TECHNOLOGIES, FILTER, TECHNOLOGY_FILTER, GET_CATEGORIES, POST_USER, GET_DETAILS, GET_LANGUAGES } from "../actions/types";


const initialState = {
    users:[],
    search:[],
    categories:[],
    filteredUsers:[],
    technologie:[],
    details:[],
    languages:[]
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
                        search: action.payload.content,

                    }
                    
                case FILTER:
                    
                    return {
                        ...state,
                        filteredUsers: action.payload.content,
                    }

                case GET_CATEGORIES:
                    return {
                        ...state,
                        categories: action.payload,
                        
                    }
                case GET_TECHNOLOGIES:
                    return {
                        ...state,
                        technologies: action.payload.rows,
                        
                    }

                // case TECHNOLOGY_FILTER:
                //     return {
                //         ...state,
                //         filteredUsers: action.payload.content,
                        
                //     }
                
                case GET_DETAILS:
                    return{
                        ...state,
                        details: action.payload
                    }

                case GET_LANGUAGES:
                    return{
                        ...state,
                        languages: action.payload
                    }

                default:
                    return state;

    }
}