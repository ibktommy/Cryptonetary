import React, { useEffect } from "react";
import SavedCoin from "../components/SavedCoin";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Account = () => {
	const { user, logout } = UserAuth();
	const navigate = useNavigate();

	// Function to Handle Logout Button
	const logOutHandler = async () => {
		try {
			await logout();
			navigate("/");
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="max-w-[1140px] mx-auto">
			<div className="flex justify-between items-center my-12 py-8 rounded-div">
				<div>
					<h1 className="text-2xl font-bold">Account</h1>
					<div>
						<p>Welcome, {user?.email}</p>
					</div>
				</div>
				<div>
					<button
						className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
						onClick={logOutHandler}
					>
						Logout
					</button>
				</div>
			</div>
			<div className="flex justify-between items-center my-12 py-8 rounded-div">
				<div className="w-full min-h-[300px]">
					<h1 className="text-2xl font-bold py-4">Watch List</h1>
					{user?.email && <SavedCoin />}
				</div>
			</div>
		</div>
	);
};

export default Account;
