import {getUserData} from './../api/api';

const CHANGE_AREA_TEXT = 'CHANGE_AREA_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profile: null,
    posts: [],
    areaText: '',
    
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_AREA_TEXT: {
            return {...state, areaText: action.areaValue }
        }
        case ADD_POST: {
            let newPost = {
                post: action.post
            }
            return {...state, posts: [...[state.posts], newPost], areaText: '' }
        }
        case SET_USER_PROFILE: return {...state, profile: action.profile}
        default:
            return state;
    }
}

export default profileReducer;

export const changeAreaText = (areaValue) => ({type: CHANGE_AREA_TEXT, areaValue  })
export const addPost = (data) => ({type: ADD_POST, post: data})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserData = (userId) => {
  return (dispatch) => {
    getUserData(userId).then( response => {
      dispatch(setUserProfile(response.data));
    });
  }
}