import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import UsersPage from './UsersPage/UsersPage';
import Loader from '../../common/Loader/Loader';
import { authRedirect } from '../../hoc/authRedirect';
import { follow, unfollow, setIsFollowing } from '../../reducers/users-reducer';
import { getUsersList, Subscribe, Unsubscribe } from '../../reducers/users-reducer';
import { getCurrentPage, getUsers, getPageSize, getTotalUsersCount, getIsFollowing, getIsFetching } from '../../reducers/users-selectors';

class UsersContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.usersOnPage = this.usersOnPage.bind(this);
    this.followOn = this.followOn.bind(this);
    this.unfollowFrom = this.unfollowFrom.bind(this);
  }
  
  componentDidMount = () => {
    this.props.getUsersList(this.props.currentPage, this.props.pageSize);
  }

  followOn = (u) => {
    this.props.Subscribe(u);
  }

  unfollowFrom = (u) => {
    this.props.Unsubscribe(u);
  }
  
  usersOnPage = (p) => {
    this.props.getUsersList(p, this.props.pageSize)  
  }

  render() {
    return <>
      {this.props.isFetching ? <Loader/> : <UsersPage {...this.props} 
      usersOnPage={this.usersOnPage}  setIsFollowing={this.props.setIsFollowing} 
      followOn={this.followOn} unfollowFrom={this.unfollowFrom}/>}
    </>
  }
}

let props = (state) => ({
  users: getUsers(state),
  isFetching: getIsFetching(state),
  currentPage: getCurrentPage(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  isFollowing: getIsFollowing(state),
})

const actions = {follow, unfollow, getUsersList, setIsFollowing,
  Subscribe, Unsubscribe}

export default 
compose(
  //authRedirect,
connect(props, actions))(UsersContainer);
