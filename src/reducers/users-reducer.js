import {getUsers, followTo, unfollowTo} from './../api/api';

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const IS_FETCHING = 'IS_FETCHING';
const IS_FOLLOWING = 'IS_FOLLOWING';

let initialState = {
    users: [],
    currentPage: 1,
    isFetching: false,
    totalUsersCount: 20,
    pageSize: 5,
    isFollowing: [],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS: return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE: return {...state, currentPage: action.onPage}
        case FOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case IS_FETCHING: return {...state, isFetching: action.isFetching}
        case IS_FOLLOWING: return {
            ...state, 
            isFollowing: action.isFetching ? [state.isFollowing, action.userId] 
            : [state.isFollowing.filter(id => id !== action.userId)]
        }
        default: return state;
    }
}

export default usersReducer;

export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (onPage) => ({type: SET_CURRENT_PAGE, onPage})
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setisFetching = (isFetching) => ({type: IS_FETCHING, isFetching })
export const setIsFollowing = (isFetching, userId) => ({type: IS_FOLLOWING, isFetching, userId})

export const getUsersList = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setisFetching(true));
    getUsers(currentPage, pageSize).then( data => {
      dispatch(setUsers(data.items));
      dispatch(setCurrentPage(currentPage));
      dispatch(setisFetching(false));
    });
  }
}

export const Subscribe = (u) => {
  return (dispatch) => {
    followTo({...u}).then( response => {             
        if (response.data.resultCode === 0) {
          dispatch(follow(u.id));
        }
      })
  }
}

export const Unsubscribe = (u) => {
  return (dispatch) => {
    dispatch(setIsFollowing(true));
    unfollowTo({...u}).then( response => {
    if (response.data.resultCode === 0) {
      dispatch(unfollow(u.id));
    }
    dispatch(setIsFollowing(false, u.id));
    })
  }
}