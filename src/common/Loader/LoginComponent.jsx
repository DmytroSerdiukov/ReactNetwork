import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLength, required } from '../../utils/validators/validator';
import { Input } from '../FormControls/FormControls';

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

const length10 = maxLength(10);

const LoginForm = (props) => {
  return <>
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" component={Input} name="login" placeholder="Login"
                   validate={[required, length10]}
            />
        </div>
        <div>
            <Field type="text" component={Input} name="password" placeholder="Password"
                   validate={[required, length10]}/>
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