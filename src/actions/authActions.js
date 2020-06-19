
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';

/*

*/

 // register user
export const registerUser = (newUser, history) => (dispatch) => {
  if (
    newUser.token!==null
  ) {
    
    alert("please check your window for document verification.")
    history.push('/login');
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: { email: "This ID has already been registered" },
    });
  }
};

         // Login - get user token
export const loginUser = (userData,history) => (dispatch) => {
  if (
     userData.token!==null
  ) {
    const user = {
      name: userData.name,
      email: userData.email,
      token:userData.token
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(setCurrentUser(user));
    history.push('/dashboard')
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: {
        email: "Email doesn't Match",
        password: 'Enter correct Password',
      },
    });
  }
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  
  // localStorage.removeItem('user');
  localStorage.clear();
 
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
