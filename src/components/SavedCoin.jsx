import React, { useState } from "react";
import { Link } from "react-router-dom";

const SavedCoin = () => {
	const [savedCoins, setSavedCoins] = useState([]);

	return (
		<div>
			{savedCoins.length === 0 ? (
				<p>
					You don't have any coins saved. Please save a coin to add it to the
					Watchlist.{" "}
					<Link to="/" className="text-red-500">
						Click here to Search Coins.
					</Link>
				</p>
			) : (
				<table>
					<thead>
						<tr>
							<th>Rank</th>
							<th>Coin</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody>
						{savedCoins.map((coin) => {
							return (
								<tr key={coin?.id}>
									<td>{coin?.rank}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default SavedCoin;
