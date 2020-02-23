import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

export const authRedirect = (Component) => {
  class ContainerComponent extends React.Component {
    render() {
      return props.isAuth ? <Component {...this.props}/> : <Redirect to = "/login" />
    }
  }
  
  let mapStateForContainer = (state) => ({
    isAuth: state.auth.isAuth
  })

  let ComponentWrapper = connect(mapStateForContainer)(ContainerComponent);

  return ComponentWrapper;
}

