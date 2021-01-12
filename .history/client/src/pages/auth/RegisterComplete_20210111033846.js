import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const RegisterComplete = (history) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useState(() => {
		console.log(window.localStorage.getItem('emailForRegistration'));
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	const completeRegisterForm = () => (
		<form onSubmit={handleSubmit}>
			<input
				type='email'
				className='form-control'
				value={email}
				
				autoFocus
			/>
			<button type='submit' className='btn btn-raised'>
				Complete Registration!
			</button>
		</form>
	);

	return (
		<div className='container p-5'>
			<div class='row'>
				<div class='col-md-6 offset-md-3'>
					<h4>Register Complete</h4>

					{completeRegisterForm()}
				</div>
			</div>
		</div>
	);
};

export default RegisterComplete;
