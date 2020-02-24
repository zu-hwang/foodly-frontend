import React, { Component } from "react";
import "../../Styles/accountForm.scss";

class Register extends Component {
	render() {
		return (
			<>
				<div className='container'>
					<div className='title-container'>
						<p className='title'>create account</p>
						<p className='sub-title'>
							to take advantage of personalized shopping
						</p>
					</div>
					<div className='form-container'>
						<div className='input-wrap'>
							<input type='text' placeholder='First name'></input>
						</div>
						<div className='input-wrap'>
							<input type='text' placeholder='Last name'></input>
						</div>
						<div className='input-wrap'>
							<input type='text' placeholder='Email'></input>
						</div>
						<div className='input-wrap'>
							<input type='password' placeholder='Password'></input>
						</div>
						<div className='btn-wrap'>
							<button type='button'>create my account</button>
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
