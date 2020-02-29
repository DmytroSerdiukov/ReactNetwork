import React from 'react';
import {connect} from 'react-redux';

import HeaderPage from './HeaderPage/HeaderPage';
import {authMe, logout} from '../../reducers/auth-reducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <HeaderPage {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {authMe, logout})(HeaderContainer);