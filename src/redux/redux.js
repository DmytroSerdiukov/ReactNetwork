import {createStore, combineReducers} from 'redux'
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import profileReducer from './../reducers/profile-reducer';
import usersReducer from './../reducers/users-reducer';
import authReducer from '../reducers/auth-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer
  }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;