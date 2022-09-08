import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

const SavedCoin = () => {
	const [savedCoins, setSavedCoins] = useState([0]);
	const { user } = UserAuth();

	// Getting the Data-items in the Firestore Database with useEffect After Component renders
	useEffect(() => {
		onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
			setSavedCoins(doc.data()?.watchList);
		});
	}, [user?.email]);

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
				<table className="w-full border-collapse text-center">
					<thead>
						<tr className="border-b">
							<th className="px-4">Rank</th>
							<th className="text-left">Coin</th>
							<th className="text-left">Remove</th>
						</tr>
					</thead>
					<tbody>
						{savedCoins.map((coin, id) => {
							return (
								<tr className="h-[60px] overflow-hidden" key={id}>
									<td>{coin?.rank}</td>
									<td>
										<Link to={`/coin/${coin.id}`}>
											<div className="flex items-center">
												<img
													src={coin?.image}
													alt={coin?.name}
													className="w-8 mr-4"
												/>
												<div>
													<p className="hidden sm:table-cell">{coin?.name}</p>
													<p className="text-gray-500 text-left text-sm">
														{coin?.symbol?.toUpperCase()}
													</p>
												</div>
											</div>
										</Link>
									</td>
									<td className="pl-8">
										<AiOutlineClose className="cursor-pointer" />
									</td>
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
