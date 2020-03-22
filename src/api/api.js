import * as axios from 'axios';

const instance = axios.create(
  {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      "API-KEY": "793458fa-c4a0-43b5-99ae-7944b8ed267f"
    }
  }
);

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`, ).then(response => response.data);
}

export const followTo = ({id}) => {
  return instance.post(`follow/${id}`)
}

export const unfollowTo = ({id}) => {
  return instance.delete(`follow/${id}`)
}

export const getUserData = (userId) => {
  return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId, {
    withCredentials: true
  })
}

export const authMyself = () => {
  return instance.get(`/auth/me`, {
    withCredentials: true
  })
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe});
  },
  logout() {
    return instance.delete(`auth/login`);
  }
}