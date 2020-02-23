import React from 'react';
import {connect} from 'react-redux';
import UsersPage from './UsersPage/UsersPage';
import { follow, unfollow, setIsFollowing} from '../../reducers/users-reducer';
import Loader from '../../common/Loader/Loader';
import {getUsersList, Subscribe, Unsubscribe} from '../../reducers/users-reducer';
import { compose } from 'redux';
import { authRedirect } from '../../hoc/authRedirect';

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
        {this.props.isFetching ? <Loader/> : <UsersPage {...this.props} usersOnPage={this.usersOnPage}  setIsFollowing={this.props.setIsFollowing} followOn={this.followOn} unfollowFrom={this.unfollowFrom}/>}
        </>
    }
}

let props = (state) => ({
  users: state.usersPage.users,
  isFetching: state.usersPage.isFetching,
  currentPage: state.usersPage.currentPage,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  isFollowing: state.usersPage.isFollowing
})

const actions = {follow, unfollow, getUsersList, setIsFollowing,
  Subscribe, Unsubscribe}

export default 
compose(authRedirect,
connect(props, actions))(UsersContainer);
