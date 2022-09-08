import React, { useState } from "react";
import DataItem from "./CoinDataItem";

const SearchBar = ({ data }) => {

	const [searchText, setSearchText] = useState("");

	return (
		<div className="rounded-div my-4">
			<div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
				<h1 className="text-2xl font-bold my-2">Search Crypto</h1>
				<form>
					<input
						className="w-full bg-primary border-input px-4 py-2 rounded-2xl shadow-xl"
						type="text"
						placeholder="Search a Coin"
						onChange={(e) => setSearchText(e.target.value)}
					/>
				</form>
			</div>

			<table className="w-full border-collapse text-center">
				<thead>
					<tr className="border-b">
						<th className="text-left w-20 text-sm">
							Click Star to Add Coin to WatchList
						</th>
						<th className="px-4">#</th>
						<th className="text-left">Coin-Icon</th>
						<th>Coin-Name</th>
						<th>Price</th>
						<th>24hr</th>
						<th className="hidden md:table-cell">24h Volume</th>
						<th className="hidden md:table-cell">Mkt</th>
						<th>Last 7 Days</th>
					</tr>
				</thead>

				<tbody>
					{data
						.filter((value) => {
							return value.name
								.toLowerCase()
								.includes(searchText.toLowerCase());
						})
						.map((dataItem) => (
							<DataItem key={dataItem.id} dataItem={dataItem} />
						))}
				</tbody>
			</table>
		</div>
	);
};

export default SearchBar;
