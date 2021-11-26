import axios from 'axios';
import { GET_USER, SEARCH, CATEGORY_FILTER } from "../actions/types";

export function getUser() {
    return async function(dispatch){
        const users = await axios('http://localhost:3001/api/getusers')
        dispatch({
            type: GET_USER,
            payload: users.data
        })
    }
}

export function Search(payload) {
    return async function(dispatch){
        const searching = await axios('http://localhost:3001/api/search', payload)
        dispatch({
            type: SEARCH,
            payload: searching.data
        })
    }
}

export function categoryFilter(payload) {
    return async function(dispatch){
        const category = await axios('http://localhost:3001/api/filterByCategory', payload)
        dispatch({
            type: SEARCH,
            payload: category.data
        })
    }
}

