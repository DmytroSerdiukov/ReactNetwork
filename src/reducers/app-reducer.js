import { authMe } from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: null,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED: 
            return {...state, initialized: true}
        default:
            return state;
    }
}

export default appReducer;

export const initializedSucces = () => ({type: SET_INITIALIZED });

export const init = () => 
  (dispatch) => {
    let promise = authMe();
    Promise.all([promise])
      .then( () => {
        
        dispatch(initializedSucces());
      });
    
  }


