import React from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div>
			<div
			>
				<h1>Login</h1>
				<form>
					<div>
						<label htmlFor="email">Email</label>
						<div>
							<input type="email" id="email" />
							<AiOutlineMail />
						</div>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<div>
							<input type="password" name="password" />
							<AiFillLock />
						</div>
					</div>
					<button>Login</button>
				</form>
				<p>Don't have an account? <Link to=''>Register An Account</Link></p>
			</div>
		</div>
	);
};

export default Login;
