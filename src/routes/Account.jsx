import React from "react";
import SavedCoin from "../components/SavedCoin";

const Account = () => {
	return (
		<div>
			<div>
				<div>
					<h1>Account</h1>
					<div>
						<p>Welcome, User</p>
					</div>
				</div>
				<div>
					<button>Logout</button>
				</div>
			</div>
			<div>
				<div>
					<h1>Watch List</h1>
					<SavedCoin />
				</div>
			</div>
		</div>
	);
};

export default Account;
