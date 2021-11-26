import { firebase, googleAuthProvider } from "../components/firebase/firebase-config";
import { types } from "../actions/types";

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
