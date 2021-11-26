
import axios from 'axios';
import { types, GET_USER, SEARCH, CATEGORY_FILTER } from "../actions/types";
import { firebase, googleAuthProvider } from "../components/firebase/firebase-config";


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
            type: CATEGORY_FILTER,
            payload: category.data
        })
    }
}



export const startGoogleLogin = () => {
  return (dispatch) => {

    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(startLoding())
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
        dispatch(finishLoding())
      }).catch((error) => {
        console.log(error);
        dispatch(finishLoding())
  } );
      
}
}

export const login = (uid, displayName, email, photoURL) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
    email,
    photoURL,
  },
});

export const logout = () => ({
  type: types.logout,
});

export const setError = (err) => ({
  type: types.setError,
  payload: err,
});

export const removeError = () => ({
  type: types.removeError,
});

export const startLoding = () => ({
  type: types.startLoding,
});

export const finishLoding = () => ({
  type: types.finishLoding,
});

