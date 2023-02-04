import './styles.css';
import React from 'react';
import { useState, useEffect } from 'react';

export default function LogInForm({navigate}) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		fetch('/users', {
			method: 'post',
			body: JSON.stringify({ email: email, password: password})
		})
			.then(response => {
				if(response.status === 201) {
					navigate("/login")
				} else {
					navigate("/signup")
				}
			})
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value)
	}


	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} />
			<input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange} />
			<input id='submit' type="submit" value="Submit" />
		</form>
	);
}