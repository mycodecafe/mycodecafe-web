// authActions.js
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth"; // Import authentication methods
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import getAuth and GoogleAuthProvider
  import { auth } from "../../firebaseConfig";
  import { USER_LOGGED_IN, USER_LOGGED_OUT, AUTH_ERROR } from './actionTypes';
  
  
  
  export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    payload: user,
  });
  
  export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,
  });
  
  export const authError = (error) => ({
    type: AUTH_ERROR,
    payload: error,
  });
  
  
  export const signInWithGoogle = () => async (dispatch) => {
    const provider = new GoogleAuthProvider(); // Create an instance of GoogleAuthProvider
  
    try {
      let user = await signInWithPopup(auth, provider); // Use signInWithPopup with the auth instance
      dispatch(userLoggedIn(user));
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };
  
  export const signUpWithEmail = (email, password) => async (dispatch) => {
    try {
      let user = await createUserWithEmailAndPassword(auth, email, password); // Use createUserWithEmailAndPassword with the auth instance
      dispatch(userLoggedIn(user));
    } catch (error) {
      console.error('Error signing up with email/password:', error);
    }
  };
  
  export const signInWithEmail = (email, password) => async (dispatch) => {
    try {
      let user =  await signInWithEmailAndPassword(auth, email, password); // Use signInWithEmailAndPassword with the auth instance
      // dispatch({
      //   type: 'SET_USER',
      //   user: user
      // })
      dispatch(userLoggedIn(user));
    } catch (error) {
      console.error('Error signing in with email/password:', error);
    }
  };
  
  export const signOut = () => async (dispatch) => {
    // You can use the auth instance to sign out
    try {
      await auth.signOut();
      dispatch(userLoggedOut());
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  