
import axios from 'axios';
import { types, GET_USER, SEARCH, CATEGORY_FILTER, TECHNOLOGY_FILTER, GET_TECHNOLOGIES, GET_CATEGORIES } from "../actions/types";
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

export function getCategories() {
  return async function(dispatch){
    const categories = await axios('http://localhost:3001/api/categories');
    dispatch({
      type: GET_CATEGORIES,
      payload: categories.data
    })
    
  }
}


export function postLogin(payload){
  return async function(){
    const user = await axios.post('http://localhost:3001/api/login', payload) 
    localStorage.setItem("user", JSON.stringify(user.data)) //guarda la info del back en localstorage
    loglocal()
    return user
  }
}

export function githubLogin() {
  return async function(dispatch){
    const github = await axios('http://localhost:3001/api/github')
    console.log(github)
    dispatch({
      type: 'GITHUB',
      payload: github
    })
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
        const category = await axios('http://localhost:3001/api/filterByCategory?categories='+payload)
        console.log('ACTION CATEGORIA', category.data)
        dispatch({
            type: CATEGORY_FILTER,
            payload: category.data
        })
    }
}

export function technologyFilter(payload) {
  return async function(dispatch){
      const tech = await axios('http://localhost:3001/api/filterByTechnology?technologies=' + payload)
      
      dispatch({
          type: TECHNOLOGY_FILTER,
          payload: tech.data
      })
  }
}

export function getTechnologies(payload) {
  return async function(dispatch){
      const tech = await axios('http://localhost:3001/api/getTechnologies', payload)
      console.log('ACTION TECH', tech.data)
      dispatch({
          type: GET_TECHNOLOGIES,
          payload: tech.data
      })
  }
}


export const startGoogleLogin = () => {

  return async (dispatch) => {

    try{await firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
        dispatch(startLoding())
        (dispatch(loginStore()))
        dispatch(finishLoding())  
      }).catch((error) => {
       console.log(error);
        
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

function loglocal(){
  var local = JSON.parse(localStorage.getItem("user"));   
  return local
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
   try{ firebase
      .auth()
      .signOut()  
      .then(() => {
        dispatch(logout());
        dispatch(logoutStore());
      })
      .catch((error) => {
        console.log(error);
      });}
      catch(error){
        console.log(error)
      }
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
export const setError1 = (err1) => ({
  type: types.setError1,
  payload: err1,
});

export const removeError1 = () => ({
  type: types.removeError1,
});

export const startLoding = () => ({
  type: types.startLoding,
});

export const finishLoding = () => ({
  type: types.finishLoding,
});


export const startUploading = (file)=>{
  return  async (dispatch)=>{
   const fileUrl = await fileUpload(file)
   dispatch(fileUrl)
  localStorage.setItem("profileImage", fileUrl)
  console.log(dispatch(fileUrl))
 }
}