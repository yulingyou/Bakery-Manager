import './styles.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar2 from './Navbar2';

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
		<div>
				<Navbar2></Navbar2>
				<div class="collapse">
					<div class="collapse-content">
          	<p>bake</p>
        	</div>
				</div>
				<div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
					<div class="relative py-3 sm:max-w-xl sm:mx-auto">
						<div
							class="absolute inset-0 bg-gradient-to-r from-green to-bone shadow-darkgreen transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
						</div>
						<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
							<div class="max-w-md mx-auto w-96">
								<div>
									<h1 className="mb-12 text-3xl text-center font-heading">Login Form</h1>
								</div>
								<div class="divide-y divide-gray-200">
								<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
									<form onSubmit={handleSubmit}>
										<div class="relative">
											<input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" value={ email } onChange={handleEmailChange} />
											<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
										</div>
										<div class="relative">
											<input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" value={ password } onChange={handlePasswordChange} />
											<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
										</div>
										<div class="mt-6 relative">
											<button type="submit" value="Submit" className="
												btn
												w-full
												px-6
												py-2.5
												text-white
												font-medium
												rounded-md
												text-s
												leading-tight
												uppercase
												shadow-md
												hover:bg-#A9A9A9 hover:shadow-lg
												focus:bg-#A9A9A9 focus:shadow-lg focus:outline-none focus:ring-0
												active:bg-#A9A9A9 active:shadow-lg
												transition
												duration-150
												ease-in-out"
												onSubmit={handleSubmit} >Submit</button>
											{/* <button id='submit' type="submit" value="Submit" class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button> */}
										</div>
											{/* <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} /> */}
											{/* <input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange} /> */}
											{/* <input id='submit' type="submit" value="Submit" /> */}
									</form>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
	);
}