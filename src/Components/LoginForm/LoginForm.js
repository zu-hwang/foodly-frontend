import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import InputCheckBox from "../RegisterForm/InputCheckBox";
import Input from "../RegisterForm/Input";
import "../../Styles/accountForm.scss";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      checkForm: false
    };
  }

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
    if (this.state.email && this.state.password) {
      // let myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        email: this.state.email,
        password: this.state.password
      });

      let requestOptions = {
        method: "POST",
        body: raw
      };

      fetch("http://10.58.1.127:8000/account/signin", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    }
    // //! 클릭했을때 유효 검사
    // //! 이메일에 @ 체크 없으면 && pw에 6자 이상일때 >> checkForm :true
    // if ("@" in this.state.email && `'` in this.state.email) {
    //   this.setState({ checkForm: true });
    // }
  };
  handleEnterKey = (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      this.setState({ checkForm: true });
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
  render() {
    return (
      <>
        <div className="account-form-container">
          <div className="title-container">
            <p className="title">login</p>
            <p className="sub-title">glad you are back, we have missed you</p>
          </div>

          <div className="form-container">
            <Input
              Label={"Email"} // placeholder 내용
              Value={this.state.email} // 인풋 벨류 공유
              Type={"text"} // 인풋 타입 지정 text, password, email
              HtmlFor={"email"} // label 붙이기 용
              OnChange={this.handleEmailValue}
              OnKeyUp={this.handleEnterKey} // 이벤트 공유
              OnDisplay={this.handleDisplay}
              CheckForm={this.state.checkForm} // ! 버튼클릭하면 변경
            >
              <InputCheckBox />
            </Input>
            <Input
              Label={"Password"} // placeholder 내용
              Value={this.state.password} // 인풋 벨류 공유
              Type={"password"} // 인풋 타입 지정 text, password, email
              HtmlFor={"password"} // label 붙이기 용
              OnChange={this.handlePasswordValue}
              OnKeyUp={this.handleEnterKey} // 이벤트 공유
              OnDisplay={this.handleDisplay}
              CheckForm={this.state.checkForm} // ! 버튼클릭하면 변경
            >
              <InputCheckBox />
            </Input>
            <p className="small-red">Forgot password</p>
            <div className="btn-wrap">
              <button type="button" onClick={this.handleClickBtn}>
                login to my account
              </button>
            </div>
            <div className="text-container">
              <p className="">
                Don't have account yet?{" "}
                <span className="mid-red" onClick={this.goToRegister}>
                  Create it here.
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(LoginForm);
