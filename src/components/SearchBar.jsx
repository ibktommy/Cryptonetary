import React, { useState } from "react";
import DataItem from "./DataItem";

const SearchBar = ({ data }) => {
	console.log(data);

	const [searchText, setSearchText] = useState("");

	return (
		<div>
			<div>
				<h1>Search Crypto</h1>
				<form>
					<input
						type="text"
						placeholder="Search a Coin"
						onChange={(e) => setSearchText(e.target.value)}
					/>
				</form>
			</div>

			<table>
				<thead>
					<th></th>
					<th>#</th>
					<th>Coin</th>
					<th></th>
					<th>Price</th>
					<th>24hr</th>
					<th>24hr Volume</th>
					<th>Mkt</th>
					<th>Last 7 Days</th>
				</thead>

				<tbody>
					{data
						.filter((value) => {
							if (searchText === "") {
								return value;
							} else if (
								value.name.toLowerCase().includes(searchText.toLowerCase())
							) {
								return value;
							}
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
