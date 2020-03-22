import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './userPageStyles.module.css';
//import { followTo, unfollowTo } from './../../../api/api';

const UsersPage = (props) => {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }  
  return <> 
    <div>
        {pages.map(p => <span className={props.currentPage === p && styles.selected } onClick={() => {props.usersOnPage(p)}}>{p}</span>)}
    </div>  
    {props.users.map(u => <div key={u.id}>
      <NavLink to={'/profile/'+u.id}>
        <img src='#' alt="img"/>
      </NavLink>
      <div>
        {u.name}
      </div>
      <div>
        {u.id}
      </div>
      <div>
        {u.followed ? <button disabled={props.isFollowing.some( id => id === u.id)} onClick={() => {props.unfollowFrom(u)}}>Unfollow</button> 
        : <button disabled={props.isFollowing.some( id => id === u.id)} onClick={() => {props.followOn(u)} }>Follow</button> }
        </div>
    </div>)}
  </>
}

export default UsersPage;