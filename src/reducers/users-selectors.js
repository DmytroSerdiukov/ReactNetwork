import { createSelector } from "reselect";

export const getCurrentPage = state => {
  return state.usersPage.currentPage;
}

export const selectAllUsers = state => {
  return state.usersPage.users;
}

export const getUsers = createSelector( [selectAllUsers], 
  (users) => users.filter(u => true)
);

export const getPageSize = state => {
  return state.usersPage.pageSize;
}

export const getTotalUsersCount = state => {
  return state.usersPage.totalUsersCount;
}

export const getIsFollowing = state => {
  return state.usersPage.isFollowing;
}

export const getIsFetching = state => {
  return state.usersPage.isFetching;
}

export const getPosts = state => {
  return state.profilePage.posts;
}

export const getAreaText = state => {
  return state.profilePage.areaText;
}

export const getProfile = state => {
  return state.profilePage.profile;
}

export const getUserId = state => {
  return state.auth.userId;
}

export const getIsAuth = state => {
  return state.auth.isAuth;
}