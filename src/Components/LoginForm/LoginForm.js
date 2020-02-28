import React, { Component } from "react";
import "../../Styles/accountForm.scss";

class LoginForm extends Component {
  render() {
    return (
      <>
        <div className="account-form-container">
          <div className="title-container">
            <p className="title">login</p>
            <p className="sub-title">glad you are back, we have missed you</p>
          </div>
          <div className="form-container">
            <div className="input-wrap">
              <input type="text" placeholder="Email"></input>
            </div>
            <div className="input-wrap">
              <input type="password" placeholder="Password"></input>
            </div>
            <p className="small-red">Forgot password</p>
            <div className="btn-wrap">
              <button type="button">login to my account</button>
            </div>
            <div className="text-container">
              <p className="">
                Don't have account yet?{" "}
                <span className="mid-red">Create it here.</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
