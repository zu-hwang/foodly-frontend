import React, { Component } from "react";
import "./LoginForm.scss";

class LoginForm extends Component {
	render() {
		return (
			<>
				<div className="form-container">
					<p className="title">LOGIN</p>
					<p className="sub-title">glad you are back, we have missed you</p>
					<div className="input-wrap">
						<input type="text" placeholder="Email"></input>
					</div>
					<div className="input-wrap">
						<input type="password" placeholder="Password"></input>
					</div>
					<p className="small-red">Forgot password</p>
				</div>
			</>
		);
	}
}

export default LoginForm;
