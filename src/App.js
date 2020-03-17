import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginComponent from './common/Loader/LoginComponent';
import {connect} from 'react-redux';
import { compose } from 'redux';
import {authMe} from './reducers/auth-reducer';
import {init} from './reducers/app-reducer';
import Prealoder from './common/Loader/Loader';

class App extends React.Component {

  componentDidMount() {
    this.props.init();
  }

  render() {
    if (!this.props.initialized) {
      return <Prealoder /> } else {
    return (
      <div>
        <HeaderContainer />
        <Navbar/>
        <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
        <Route exact path={'/users'} render={() => <UsersContainer />}/>
        <Route exact path="/login" render={ () => <LoginComponent /> }/>
      </div>
    )
  }
  }
}

let props = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(props, {authMe, init}))(App);
