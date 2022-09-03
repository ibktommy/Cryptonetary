import React from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const Logout = () => {
	return (
		<div>
			<div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
				<h1 className="text-2xl font-bold">Register</h1>
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
