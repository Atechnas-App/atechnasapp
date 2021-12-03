import { GET_USER, SEARCH, CATEGORY_FILTER, DEVELOPER, DESIGN, MARKETING, GET_TECHNOLOGIES, FILTER, TECHNOLOGY_FILTER, GET_CATEGORIES, POST_USER, GET_DETAILS } from "../actions/types";


const initialState = {
    users:[],
    search:[],
    categories:[],
    // filteredUsers:[],
    technologie:[],
    details:[],
    developers:[]
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
                case DEVELOPER:
                    return{
                        ...state,
                        developers: action.payload
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

                default:
                    return state;

    }
}