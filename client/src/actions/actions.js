
import Swal from 'sweetalert2';
import axios from 'axios';
import { types, GET_USER, SEARCH, CATEGORY_FILTER, DEVELOPER, DESIGN, MARKETING, TECHNOLOGY_FILTER, 
  GET_TECHNOLOGIES, FILTER, GET_CATEGORIES, GET_DETAILS, GET_LANGUAGES} from "../actions/types";
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

export function getDevelopers() {
  return async function(dispatch){
    const bestof = await axios('http://localhost:3001/api/bestDevelopers');
    console.log('ACTION DEV', bestof.data)
    dispatch({
      type: DEVELOPER,
      payload: bestof.data
    })
    
  }
}

export function getDesign() {
  return async function(dispatch){
    const bestof = await axios('http://localhost:3001/api/bestDesign');
    dispatch({
      type: DESIGN,
      payload: bestof.data
    })
    
  }
}

export function getMarketing() {
  return async function(dispatch){
    const bestof = await axios('http://localhost:3001/api/bestMarketing');
    dispatch({
      type: MARKETING,
      payload: bestof.data
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
        const searching = await axios('http://localhost:3001/api/search?searcher='+ payload)
        console.log('ACTION SEARCH', searching.data)
        dispatch({
            type: SEARCH,
            payload: searching.data
        })
    }
}

export function Filter(payload) {
    return async function(dispatch){
        const category = await axios('http://localhost:3001/api/filterSearch?searchValues='+payload)
        console.log('INFO FILTER', category.data)
        dispatch({
            type: FILTER,
            payload: category.data
        })
    }
}

// export function technologyFilter(payload) {
//   return async function(dispatch){
//       const tech = await axios('http://localhost:3001/api/filterByTechnology?technologies=' + payload)
      
//       dispatch({
//           type: TECHNOLOGY_FILTER,
//           payload: tech.data
//       })
//   }
// }

export function getTechnologies(payload) {
  return async function(dispatch){
      const tech = await axios('http://localhost:3001/api/getTechnologies')
      console.log('ACTION TECH', tech.data)
      dispatch({
          type: GET_TECHNOLOGIES,
          payload: tech.data
      })
  }
}

export function getLanguages(payload) {
  return async function(dispatch){
      const lang = await axios('http://localhost:3001/api/language')
      dispatch({
          type: GET_LANGUAGES,
          payload: lang.data
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

Swal.fire({
  title: 'Subiendo imagen',
  text: 'Espere un momento',
  allowOutsideClick: false,
  showConfirmButton: false,
  onOpen: () => {
    Swal.showLoading()
  }
})

    try{    
   const fileUrl = await fileUpload(file)
  localStorage.setItem("profileImage", fileUrl)
    }catch(error){
      console.log(error)
    }
Swal.close()
}
}

export function getDetails(id) {
  return async function(dispatch){
    const users = await axios.get("http://localhost:3001/api/details/" + id)
    return dispatch({
      type: GET_DETAILS,
      payload: users.data
    })
  }
 }

 export function editProfile(id, payload){
      return async function(){
    const editedProfile = await axios.put("http://localhost:3001/api/profile/" + id, payload)
      return editedProfile
   }
 }
 