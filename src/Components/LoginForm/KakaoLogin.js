import React, { Component } from "react";
import Kakao from "kakaojs";
import "./KakaoLogin.scss";

// import Kakao from "kakao";

class KakaoLogin extends Component {
  componentDidMount = () => {
    console.log("hellot");
    Kakao.init("008b07a36b0adb180414682ea946bee7");
  };

  render() {
    return (
      <div className="kakao-btn-container" onClick={this.props.onClick}>
        <div id="kakao-login-btn">kakao login</div>
      </div>
    );
  }
}
export default KakaoLogin;
