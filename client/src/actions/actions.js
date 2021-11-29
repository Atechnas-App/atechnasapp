
import axios from 'axios';
import { types, GET_USER, SEARCH, CATEGORY_FILTER } from "../actions/types";
import { fileUpload } from '../assets/cloudinary/Cloudinary';
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

export function postUser(payload) {
  return async function(){
    const newUser = await axios.post('http://localhost:3001/api/register', payload);
    return newUser;
  }
}

export function postLogin(payload){
  return async function(){
    const user = await axios.post('http://localhost:3001/api/login', payload)
    return user
  }
}

export function Search(payload) {
    return async function(dispatch){
        const searching = await axios('http://localhost:3001/api/search?query='+ payload)
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

export const startLoginEmailPassword = (email,password) => {
    return (dispatch) => {
        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .then(({user}) => {
          dispatch(login(user.uid,user.displayName,user.email,user.photoURL))
          dispatch(startLoding())
        dispatch(finishLoding())
        })
        .catch(error => {
          console.log(error)
          dispatch(finishLoding())
        }  
          )
      }
}

export const startGoogleLogin = () => {

  return (dispatch) => {

    try{firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
        dispatch(startLoding())
        (dispatch(loginStore()))
        dispatch(finishLoding())  
      }).catch((error) => {
       console.log(error);
        /* dispatch(finishLoding()) */
      } );}catch(error){
        console.log(error)
      }
} 
}


 function loginStore() {
  try{  firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var photoURL = user.photoURL;
      
      localStorage.setItem("displayName",displayName)
      localStorage.setItem("email",email)
      localStorage.setItem("photoURL",photoURL)}
    })
  }catch(error){
      console.log(error)
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

export const logoutAll = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()  
      .then(() => {
        dispatch(logout());
        dispatch(logoutStore());
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

function logoutStore() {
  localStorage.removeItem("displayName")
  localStorage.removeItem("email")
  localStorage.removeItem("photoURL")
}



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


export const startUploading = (file)=>{
  return  async (dispatch, getState)=>{
    const imagProfile = getState().photoURL
   const fileUrl = await fileUpload(file)
   console.log(fileUrl)
  }
}