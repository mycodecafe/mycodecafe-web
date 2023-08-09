
import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    AUTH_ERROR,
  } from '../actions/actionTypes'; // Import your action types
  
  const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGGED_IN:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          error: null,
        };
      case USER_LOGGED_OUT:
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          error: null,
        };
      case AUTH_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  
    