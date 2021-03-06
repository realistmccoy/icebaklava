import React, { useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const RegisterComplete = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //props.history


	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log('env--->', process.env.REACT_APP_REGISTER_REDIRECT_URL);
		const config = {
			url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
			handleCodeInApp: true,
		};

		await auth.sendSignInLinkToEmail(email, config);
		toast.success(
			`Email is sent to ${email}, Click the link to complete your registration.`,
		);
		//save user email in Local storage
		window.localStorage.setItem('emailForRegistration', email);
		//clear state from local storage
		setEmail('');
	};

	const registerForm = () => (
		<form onSubmit={handleSubmit}>
			<input
				type='email'
				className='form-control'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				autoFocus
			/>
			<button type='submit' className='btn btn-raised'>
				Register
			</button>
		</form>
	);

	return (
		<div className='container p-5'>
			<div class='row'>
				<div class='col-md-6 offset-md-3'>
					<h4>Register</h4>

					{registerForm()}
				</div>
			</div>
		</div>
	);
};

export default RegisterComplete;
