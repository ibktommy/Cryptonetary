import React, { useState } from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'

const Logout = () => {
	// Getting Values from the App Context
	const { register } = UserAuth()

	// Setting State in Form-Register
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	// Using Navigate 
	const navigate = useNavigate()

	return (
		<div>
			<div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
				<h1 className="text-2xl font-bold">Register</h1>
				{error ? <p className="bg-red-300 p-3
				 my-2">{error}</p> : null}
				<form>
					<div className="my-4">
						<label htmlFor="email">Email</label>
						<div className="my-2 w-full relative rounded-2xl shadow-xl">
							<input
								className="w-full p-2 bg-primary border border-input rounded-2xl"
								type="email"
								id="email"
								placeholder="Enter your email"
							/>
							<AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
						</div>
					</div>
					<div className="my-4">
						<label htmlFor="password">Password</label>
						<div className="my-2 w-full relative rounded-2xl shadow-xl">
							<input
								className="w-full p-2 bg-primary border border-input rounded-2xl"
								type="password"
								name="password"
								placeholder="Enter your password"
							/>
							<AiFillLock className="absolute right-2 top-3 text-gray-400" />
						</div>
					</div>
					<div className="my-4">
						<label htmlFor="password">Confirm Password</label>
						<div className="my-2 w-full relative rounded-2xl shadow-xl">
							<input
								className="w-full p-2 bg-primary border border-input rounded-2xl"
								type="password"
								name="password"
								placeholder="Confirm password"
							/>
							<AiFillLock className="absolute right-2 top-3 text-gray-400" />
						</div>
					</div>
					<button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
						Register
					</button>
				</form>
				<p className="my-4">
					Already have an account?{" "}
					<Link to="/login" className=" text-red-400 ml-2">
						Login To Your Account
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Logout;
