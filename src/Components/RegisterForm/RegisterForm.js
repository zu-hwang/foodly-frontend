import React, { Component } from 'react';
import Input from './Input';
import '../../Styles/accountForm.scss';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      checkForm: false
    };
  }
  handleFirstNameValue = (e) => {
    this.setState({ firstName: e.target.value });
    // console.log(this.state.firstName);
  };
  handleLastNameValue = (e) => {
    this.setState({ lastName: e.target.value });
    // console.log(this.state.lastName);
  };
  handleEmailValue = (e) => {
    this.setState({ email: e.target.value });
    // console.log(this.state.email);
  };
  handlePasswordValue = (e) => {
    this.setState({ password: e.target.value });
    // console.log(this.state.password);
  };

  handleClickBtn = (e) => {
    this.setState({ checkForm: true });
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.password
    ) {
      this.setState({ checkForm: true });
    }
  };
  handleEnterKey = (e) => {
    // console.log(e);
    if (e.key === 'Enter') {
      this.setState({ checkForm: true });
    }
  };
  handleDisplay = () => {
    this.setState({
      checkForm: false
    });
  };
  render() {
    return (
      <>
        <div className='account-form-container'>
          <div className='title-container'>
            <p className='title'>create account</p>
            <p className='sub-title'>
              to take advantage of personalized shopping
            </p>
          </div>
          <div className='form-container'>
            <Input
              Label={'First name'} // placeholder 내용
              Value={this.state.firstName} // 인풋 벨류 공유
              Type={'text'} // 인풋 타입 지정 text, password, email
              HtmlFor={'first'} // label 붙이기 용
              OnChange={this.handleFirstNameValue}
              OnKeyUp={this.handleEnterKey} // 이벤트 공유
              OnDisplay={this.handleDisplay}
              CheckForm={this.state.checkForm} // ! 버튼클릭하면 변경
            />
            <Input
              Label={'Last name'}
              Value={this.state.lastName}
              Type={'text'}
              HtmlFor={'last'}
              OnChange={this.handleLastNameValue}
              OnKeyUp={this.handleEnterKey}
              CheckForm={this.state.checkForm}
            />
            <Input
              Label={'Email'}
              Value={this.state.email}
              Type={'email'}
              HtmlFor={'email'}
              OnChange={this.handleEmailValue}
              OnKeyUp={this.handleEnterKey}
              CheckForm={this.state.checkForm}
            />
            <Input
              Label={'Password'}
              Value={this.state.password}
              Type={'password'}
              HtmlFor={'password'}
              OnChange={this.handlePasswordValue}
              OnKeyUp={this.handleEnterKey}
              CheckForm={this.state.checkForm}
            />

            <div className='btn-wrap'>
              <button type='button' onClick={this.handleClickBtn}>
                re create my account
              </button>
            </div>
            <div className='text-container'>
              <p className=''>
                <span className='mid-red'>Return to store</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
