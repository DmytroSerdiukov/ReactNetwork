import {createStore, combineReducers, compose} from 'redux'
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

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(reducers, 
  composeEnhancers(applyMiddleware(thunkMiddleware)),
  );

export default store;