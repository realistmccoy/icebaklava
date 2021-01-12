import React, {use}from 'react';

const Register = () => {
	const handleSubmit = () => {
		// TODO:firebase
	};
	const registerForm = () => (
		<form onSubmit={handleSubmit}>
			<input type='email' className='form-control' />
		</form>
	);

	return (
		<div className='container p-5'>
			<div class='row'>
				<div class='col-md-6 offset-md-3'>
					<h4>Register</h4>
					<p>1231</p>
					{registerForm()}
				</div>
			</div>
		</div>
	);
};

export default Register;
