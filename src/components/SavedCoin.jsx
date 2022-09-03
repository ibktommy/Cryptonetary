import React from "react";
import { Link } from "react-router-dom";

const SavedCoin = () => {
	return (
		<div>
			<p>
				You don't have any coins saved. Please save a coin to add it to the
				Watchlist.{" "}
				<Link to="/" className="text-red-500">
					Click here to Search Coins.
				</Link>
			</p>
		</div>
	);
};

export default SavedCoin;
