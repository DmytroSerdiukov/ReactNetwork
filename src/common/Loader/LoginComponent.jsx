import React from 'react';

const LoginComponent = props => {
  return (
    <div>
      <h2>LOGIN COMPONENT</h2>
      <LoginForm />
    </div>
  );
};

const LoginForm = () => {
  return <>
    <form action="">
        <div>
            <input type="text" placeholder="Login"/>
        </div>
        <div>
            <input type="text" placeholder="Password"/>
        </div>
        <div>
            <input type="checkbox"/> remember me
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
  </>
}

export default LoginComponent;