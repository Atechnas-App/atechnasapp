<<<<<<< HEAD
import { GET_USER, SEARCH, CATEGORY_FILTER, DEVELOPER, DESIGN, MARKETING, GET_TECHNOLOGIES, FILTER, TECHNOLOGY_FILTER, GET_CATEGORIES, POST_USER, GET_DETAILS } from "../actions/types";
=======
import { GET_USER, SEARCH, CATEGORY_FILTER, GET_TECHNOLOGIES, FILTER, TECHNOLOGY_FILTER, GET_CATEGORIES, POST_USER, GET_DETAILS, GET_LANGUAGES } from "../actions/types";
>>>>>>> 0edc20e7fb2f762829b70cda7945f4d936fa202b


const initialState = {
    users:[],
    search:[],
    categories:[],
    // filteredUsers:[],
    technologie:[],
    details:[],
    developers:[],
    design:[],
    marketing:[],
    languages:[],
    // technologies:[],
    githubUser: []
};

export default function rootReducer(state = initialState, action) {
    switch(action.type){
                case 'GITHUB':
                    return {
                        ...state,
                        githubUser: action.payload
                    }
        
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
                case DEVELOPER:
                    return{
                        ...state,
                        developers: action.payload
                    }
                case DESIGN:
                    return{
                        ...state,
                        design: action.payload
                    }
                case MARKETING:
                    return{
                        ...state,
                        marketing: action.payload
                    }
                case FILTER:
                    
                    return {
                        ...state,
                        search: action.payload.content,
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