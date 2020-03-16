import { authMyself, authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export default authReducer;

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login} })

export const authMe = () => {
  return (dispatch) => {
    authMyself()
    .then( response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => { 
    authAPI.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData());
      } else {
        let action = stopSubmit("login", {_error: "Invalid data"});
        dispatch(action);
      }
    });
  }
}

export const logout = () => {
    return (dispatch) => {
      authAPI.logout()
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
      });
    }
  }