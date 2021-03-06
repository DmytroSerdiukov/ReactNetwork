import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLength, required } from '../../utils/validators/validator';
import { Input } from '../FormControls/FormControls';
import { connect } from 'react-redux';
import { login } from '../../reducers/auth-reducer';
import { Redirect } from 'react-router';

const LoginComponent = props => {
  const showMe = (data) => {
    props.login(data.email, data.password, data.rememberMe = false);
  }
  return <> 
  { props.isAuth ?
    <Redirect to={'/profile'}/>
    : <div>
      <h2>LOGIN COMPONENT</h2>
      <ReduxLoginForm onSubmit={showMe}/>
    </div>
  }
  </>; 
};


const length100 = maxLength(100);

const LoginForm = (props) => {
  
  return <>
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" component={Input} name="email" placeholder="Email"
                   validate={[required, length100]}
            />
        </div>
        <div>
            <Field type="password" component={Input} name="password" placeholder="Password"
                   validate={[required, length100]}/>
        </div>
        <div>
            <Field type="checkbox" component="input" name="rememberMe"/> Remember Me
        </div>
          <div>{props.error}</div>
        <div>
            <button>Submit</button>
        </div>
    </form>
  </>
}
const ReduxLoginForm = reduxForm({form: "login"})(LoginForm);
let props = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(props, {login})(LoginComponent);