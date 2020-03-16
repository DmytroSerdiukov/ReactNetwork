import {createStore, combineReducers} from 'redux'
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';

import profileReducer from './../reducers/profile-reducer';
import usersReducer from './../reducers/users-reducer';
import authReducer from '../reducers/auth-reducer';
import appReducer from '../reducers/app-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;