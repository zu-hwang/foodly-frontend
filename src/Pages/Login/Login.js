import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import Main from '../Main/Main';

class Login extends Component {
  render() {
    return (
      <Main>
        <LoginForm />
      </Main>
    );
  }
}

export default Login;
