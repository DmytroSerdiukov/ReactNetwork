import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

let mapStateForContainer = (state) => ({
  isAuth: state.auth.isAuth
})

export const authRedirect = (Component) => {
  class ContainerComponent extends React.Component {
    render() {
      return this.props.isAuth ? <Component {...this.props}/> : <Redirect to = "/login" />
    }
  }

  let ComponentWrapper = connect(mapStateForContainer)(ContainerComponent);
  return ComponentWrapper;
}

