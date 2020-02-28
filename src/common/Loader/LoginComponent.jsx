import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginComponent = props => {
  return (
    <div>
      <h2>LOGIN COMPONENT</h2>
      <ReduxLoginForm onSubmit={showMe}/>
    </div>
  );
};

const showMe = (msg) => {
    console.log(msg);
}

const LoginForm = (props) => {
  return <>
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" component="input" name="login" placeholder="Login"/>
        </div>
        <div>
            <Field type="text" component="input" name="password" placeholder="Password"/>
        </div>
        <div>
            <Field type="checkbox" component="input" name="rememberMe"/> Remember Me
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
  </>
}
const ReduxLoginForm = reduxForm({form: "login"})(LoginForm);

export default LoginComponent;