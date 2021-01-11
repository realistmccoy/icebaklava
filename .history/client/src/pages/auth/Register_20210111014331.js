import React, { useState } from 'react';
import {auth} from '../../firebase'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/react-toastify.css'


const Register = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const config = {
			url:'',
			handle
		}
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

export default Register;
