
import axios from 'axios';

import { types, GET_USER, SEARCH, CATEGORY_FILTER, DEVELOPER, DESIGN, MARKETING, DETAIL_JOB, 
  GET_TECHNOLOGIES, FILTER, GET_CATEGORIES, GET_DETAILS, GET_LANGUAGES, GET_JOBS, GET_TESTIMONIALS, GET_ALL_JOBS, GET_REVIEWS} from "../actions/types";

// import { fileUpload } from '../assets/cloudinary/Cloudinary';
import { firebase, googleAuthProvider } from "../components/firebase/firebase-config";

export function contratarUser(){
  return async function(dispatch){
    const authMP = await axios(`/api/authMP`)
    dispatch({
      type: 'AUTH_MP',
      payload: authMP.data
    })
  }
}

export function getUser() {
    return async function(dispatch){
        const users = await axios(`/api/getusers`)
        dispatch({
            type: GET_USER,
            payload: users.data
        })
       
    }
}

export function postUser(payload) {
  return async function(){
    const newUser = await axios.post(`/api/register`, payload);
    return newUser;
  }
}

export function getCategories() {
  return async function(dispatch){
    const categories = await axios(`/api/categories`);
    dispatch({
      type: GET_CATEGORIES,
      payload: categories.data
    })
    
  }
}

export function getDevelopers() {
  return async function(dispatch){
    const bestof = await axios(`/api/bestDevelopers`);
    console.log('ACTION DEV', bestof.data)
    dispatch({
      type: DEVELOPER,
      payload: bestof.data
    })
    
  }
}

export function getDesign() {
  return async function(dispatch){
    const bestof = await axios(`/api/bestDesign`);
    dispatch({
      type: DESIGN,
      payload: bestof.data
    })
    
  }
}

export function getMarketing() {
  return async function(dispatch){
    const bestof = await axios(`/api/bestMarketing`);
    dispatch({
      type: MARKETING,
      payload: bestof.data
    })
    
  }
}


export function postLogin(payload){
  return async function(dispatch){
    const user = await axios.post(`/api/login`, payload) 
    localStorage.setItem("user", JSON.stringify(user.data)) //guarda la info del back en localstorage
    loglocal()
    console.log(user.data)
    if(user.data.id){
dispatch({
      type: types.login,
      payload: user.data,
    })
  }
   else{
      dispatch({
        type: types.logout,
        payload: user.data,
      })
    }
  }
}

export function getGithubUserInfo() {
  return async function(dispatch){
    const githubUserInfo = await axios(`/api/login/success`)
    console.log(githubUserInfo)
    dispatch({
      type: 'GITHUB',
      payload: githubUserInfo
    })
  }
}

export function Search(payload) {
  
    return async function(dispatch){
        const searching = await axios(`/api/search?searcher=`+ payload)
        dispatch({
            type: SEARCH,
            payload: searching.data
        })
    }
}

export function Filter(payload) {
    return async function(dispatch){
        const category = await axios(`/api/filterSearch?searchValues=`+payload)
        console.log('INFO FILTER', category.data)
        dispatch({
            type: FILTER,
            payload: category.data
        })
    }
}

// export function technologyFilter(payload) {
//   return async function(dispatch){
//       const tech = await axios(`/api/filterByTechnology?technologies=` + payload)
      
//       dispatch({
//           type: TECHNOLOGY_FILTER,
//           payload: tech.data
//       })
//   }
// }

export function getTechnologies(payload) {
  return async function(dispatch){
      const tech = await axios(`/api/getTechnologies`)
      console.log('ACTION TECH', tech.data)
      dispatch({
          type: GET_TECHNOLOGIES,
          payload: tech.data
      })
  }
}

export function getLanguages(payload) {
  return async function(dispatch){
      const lang = await axios(`/api/language`)
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
        /* dispatch(login(user.uid, user.displayName, user.email, user.photoURL)) */;
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


async function loginStore() {
  try {
     firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        localStorage.setItem("displayName", user.displayName);
        localStorage.setItem("email", user.email);
        localStorage.setItem("photoURL", user.photoURL);
      }
      localStorage.setItem("id", user.uid);
    });
  } catch (error) {
    console.log(error);
  }
}

function loglocal(){
  var local = JSON.parse(localStorage.getItem("user"));   
  return local
}

/* export const login = (payload) => ({
  type: types.login,
  ...payload,
}); */

export const logoutAll =  () => {
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
  })
};
}

function logoutStore() {
  localStorage.removeItem("displayName")
  localStorage.removeItem("email")
  localStorage.removeItem("photoURL")
  localStorage.removeItem("id")
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


export function getDetails(id) {
  return async function (dispatch) {
    const users = await axios.get(`/api/details/` + id);
    return dispatch({
      type: GET_DETAILS,
      payload: users.data
    })
  }
 }

 export function editProfile(id, payload){
      return async function(){
        console.log(id, "id EDIT PROFILE")
    const editedProfile = await axios.put(`/api/profile/` + id, payload)
      return editedProfile
   }
 }

 export function getAllJobs(){
   return async function(dispatch){
     const allJobs = await axios.get(`/api/Publications`)
      return dispatch({
        type: GET_ALL_JOBS,
        payload: allJobs.data
      })
   }
 }
 export function getJobs(id) {
   return async function(dispatch){
     console.log(id.id,"id jobs")
     const getJobs = await axios(`/api/PublicationsUser/`+id.id);
     console.log(getJobs.data, "getjobs")
     return dispatch({
       type: GET_JOBS,
       payload: getJobs.data
     })
   }
 }
 
 export function postJobs(id, payload) {
   return async function(){
     const newJob = await axios.post(`/api/newPublication/` + id , payload ) 
     console.log(payload, "actions");
     return newJob
   }
 }

 export function getDetailJob(id){
   return async function(dispatch){
     console.log(id, "ID GET DETALLE DEL TRABAJO")
     const detailJob = await axios.get(`/api/Publications/`+id)
     return dispatch({
      type: DETAIL_JOB,
      payload: detailJob.data
     })
   }
 }

 export function editJob(id, payload){
   return async function(){
     console.log(id, "EDIT JOB ID")
     console.log(payload, "EDIT JOB PAYLOAD")
     const editedJob = await axios.put(`/api/modPublication/`+ id,payload)
     return editedJob
   }
 }

 export function deleteJob(id){
   return async function(){
     const deletedJob = await axios.delete(`/api/deletePublication/${id}`)
     return deletedJob
   }
 }

 export function getTestimonials(){
   return async function(dispatch){
     const testimonials = await axios(`/api/testimonial/`)
     return dispatch({
       type: GET_TESTIMONIALS,
       payload: testimonials.data
     })
   }
 }

 export function postTestimonial(payload){
   return async function(){
     const testimonial = await axios.post(`/api/testimonial`, payload)
     return testimonial
   }
 }

 export function deleteTestimonial(id){
   return async function(){
     const test = await axios.delete(`/api/deleteTestimonial?id=${id}`)
     return test
   }
 }

 export function postReview(userId, payload ) {
  return async function(){
    console.log("review echa", payload,userId )
    const newReview = await axios.post("http://localhost:3001/api/review/"+ userId, payload )
    
    return newReview
  }
}

export function getReview(id){
  return async function(dispatch){
    console.log("soy review",id)
    const review = await axios("http://localhost:3001/api/getUserReview/"+id)
    return dispatch({
      type: GET_REVIEWS,
      payload: review.data
    })
  }
}