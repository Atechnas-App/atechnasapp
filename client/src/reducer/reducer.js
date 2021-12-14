
import { GET_USER, SEARCH, CATEGORY_FILTER, DEVELOPER, DESIGN, MARKETING, GET_TECHNOLOGIES, FILTER, TECHNOLOGY_FILTER, GET_CATEGORIES, POST_USER, GET_DETAILS, GET_LANGUAGES, GET_JOBS, GET_TESTIMONIALS, DETAIL_JOB, GET_ALL_JOBS} from "../actions/types";



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
    githubUser: [],
    jobs: [],
    testimonials:[],
    detailJob:[],
    authMP: [],
    allJobs: []
};

export default function rootReducer(state = initialState, action) {
    switch(action.type){
                case 'AUTH_MP':
                    return {
                        ...state,
                        authMP: action.payload
                    }
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
                
                case GET_JOBS:
                    return{
                        ...state,
                        jobs: action.payload
                    }

                case GET_TESTIMONIALS:
                    return {
                        ...state,
                        testimonials: action.payload
                    }
                
                case DETAIL_JOB:
                    return{
                        ...state,
                        detailJob: action.payload
                    }

                case GET_ALL_JOBS:
                    return{
                        ...state,
                        allJobs: action.payload
                    }

                default:
                    return state;

    }
}