import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Input from "../RegisterForm/Input";
import KakaoLogin from "./KakaoLogin";
import "../../Styles/accountForm.scss";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      checkForm: false,
      loginError: false
    };
  }
  postData = () => {
    let raw = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    });

    let requestOptions = {
      method: "POST",
      body: raw
    };

    fetch("http://10.58.7.185:8000/account/signin", requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        if (result.access || result) {
          localStorage.setItem("m-a-t-k-n-3-5", result.access);
          this.props.history.push("/"); // 토큰 저장 후 메인창으로 이동
        }
        //  else {
        //   this.setState({ loginError: true, email: "", password: "" });
        // }
      })
      .catch(error => {
        console.log("error", error);
        this.setState({ loginError: true, email: "", password: "" });
      });
  };

  handleEmailValue = e => {
    this.setState({ email: e.target.value });
  };
  handlePasswordValue = e => {
    this.setState({ password: e.target.value });
  };

  handleClickBtn = e => {
    this.setState({ checkForm: true });
    if (
      !this.state.email.includes(" ") &&
      this.state.email.indexOf("@") > 0 &&
      this.state.email.indexOf(".") > 2 &&
      !this.state.email.includes(" ") &&
      this.state.password.length > 6 &&
      !this.state.password.includes(" ")
    ) {
      this.postData();
    }
  };
  handleEnterKey = e => {
    if (e.key === "Enter") {
      this.setState({ checkForm: true });
      if (
        !this.state.email.includes(" ") &&
        this.state.email.indexOf("@") > 0 &&
        this.state.email.indexOf(".") > 2 &&
        !this.state.email.includes(" ") &&
        this.state.password.length > 6 &&
        !this.state.password.includes(" ")
      ) {
        this.postData();
      }
    }
  };

  handleDisplay = () => {
    this.setState({
      checkForm: false
    });
  };

  goToRegister = () => {
    this.props.history.push("/register");
  };
  loginKakao = () => {
    window.Kakao.Auth.login({
      success: authObj => {
        // console.log(authObj);
        // console.log("버튼눌렀다");
      },
      fail: function(err) {
        console.log("에러", err);
      }
    });
  };
  render() {
    return (
      <>
        <div className="account-form-container">
          <div className="title-container">
            <p className="title">login</p>
            <p className="sub-title">glad you are back, we have missed you</p>
          </div>

          <div className="form-container">
            {this.state.loginError && (
              <div className="login-error-box">
                <p>Incorrect email or password</p>
              </div>
            )}
            <Input
              Label={"Email"} // placeholder 내용
              Value={this.state.email} // 인풋 벨류 공유
              Type={"email"} // 인풋 타입 지정 text, password, email
              HtmlFor={"email"} // label 붙이기 용
              OnChange={this.handleEmailValue}
              OnKeyUp={this.handleEnterKey} // 이벤트 공유
              OnDisplay={this.handleDisplay}
              CheckForm={this.state.checkForm} // ! 버튼클릭하면 변경
              ref={this.input}
            ></Input>
            <Input
              Label={"Password"} // placeholder 내용
              Value={this.state.password} // 인풋 벨류 공유
              Type={"password"} // 인풋 타입 지정 text, password, email
              HtmlFor={"password"} // label 붙이기 용
              OnChange={this.handlePasswordValue}
              OnKeyUp={this.handleEnterKey} // 이벤트 공유
              OnDisplay={this.handleDisplay}
              CheckForm={this.state.checkForm} // ! 버튼클릭하면 변경
            ></Input>
            <p className="small-red">Forgot password</p>
            <div className="btn-wrap">
              <button type="button" onClick={this.handleClickBtn}>
                login to my account
              </button>
            </div>
            <div className="text-container">
              <p>
                Don't have account yet?
                <span className="mid-red" onClick={this.goToRegister}>
                  Create it here.
                </span>
              </p>
            </div>
            <KakaoLogin onClick={this.loginKakao} />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(LoginForm);
