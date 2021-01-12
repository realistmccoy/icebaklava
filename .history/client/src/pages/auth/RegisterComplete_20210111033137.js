import React, { useState , useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const RegisterComplete = (history) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useState(() => {}, [])
  


	const handleSubmit = async (e) => {
		e.preventDefault();

	};

	const completeRegisterForm = () => (
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
