import React from 'react'
import DataItem from "./DataItem";

const SearchBar = ({ data }) => {
	console.log(data);

	return (
		<div>
			<div>
				<h1>Search Crypto</h1>
				<form>
					<input type="text" placeholder="Search a Coin" />
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
					{data.map((dataItem) => (
						<DataItem key={dataItem.id} dataItem={dataItem}/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SearchBar