import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const DataItem = ({ dataItem }) => {
	// Setting State to Monitor if coin is selected and saved
	const [savedCoin, setSavedCoin] = useState(false);

	// Destructuring Values from AuthContext
	const { user } = UserAuth();

	// Destructuring Values from Firestore Database
	const coinPath = doc(db, "users", `${user?.email}`);

	// Function to save user Data to the Firestore Database
	const saveCoinHandler = async () => {
		if (user?.email) {
			setSavedCoin(true);

			await updateDoc(coinPath, {
				watchList: arrayUnion({
					id: dataItem.id,
					name: dataItem.name,
					image: dataItem.image,
					rank: dataItem.market_cap_rank,
					symbol: dataItem.symbol,
				}),
			});
		} else {
			alert("YOU HAVE TO REGISTER OR LOGIN TO ADD COIN TO YOUR WATCHLIST");
		}
	};

	return (
		<tr className="h=[80px] border-b overflow-hidden">
			<td className="cursor-pointer" onClick={saveCoinHandler}>
				{" "}
				{savedCoin ? <AiFillStar /> : <AiOutlineStar />}
			</td>

			<td>{dataItem.market_cap_rank}</td>

			<td>
				<Link to={`/coin/${dataItem?.id}`}>
					<div className="flex items-center">
						<img
							src={dataItem.image}
							alt={dataItem.id}
							className="w-6 mr-2 rounded-full"
						/>
						<p className="hidden sm:table-cell">{dataItem.name}</p>
					</div>
				</Link>
			</td>

			<td>{dataItem.symbol.toUpperCase()}</td>
			<td>${dataItem.current_price.toLocaleString()}</td>
			<td>
				{dataItem.price_change_percentage_24h > 0 ? (
					<p className="text-green-600">
						{dataItem.price_change_percentage_24h.toFixed(2)}%
					</p>
				) : (
					<p className="text-red-600">
						{dataItem.price_change_percentage_24h.toFixed(2)}%
					</p>
				)}
			</td>
			<td className="w-[180px] hidden md:table-cell">
				${dataItem.total_volume.toLocaleString()}
			</td>
			<td className="w-[180px] hidden md:table-cell">
				${dataItem.market_cap.toLocaleString()}
			</td>
			<td>
				<Sparklines data={dataItem.sparkline_in_7d.price}>
					<SparklinesLine color="teal" />
				</Sparklines>
			</td>
		</tr>
	);
};

export default DataItem;
