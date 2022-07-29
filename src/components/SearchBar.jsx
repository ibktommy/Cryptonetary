import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

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
						<tr>
							<td>
								<AiOutlineStar />
							</td>

							<td>{dataItem.market_cap_rank}</td>

							<td>
								<div>
									<img src={dataItem.image} alt={dataItem.id} />
									<p>{dataItem.name}</p>
								</div>
							</td>

							<td>{dataItem.symbol}</td>
							<td>{dataItem.current_price}</td>
							<td>{dataItem.price_change_percentage_24h}</td>
							<td>{dataItem.total_volume}</td>
							<td>{dataItem.market_cap}</td>
							<td>
								<Sparklines data={dataItem.sparkline_in_7d.price}>
									<SparklinesLine color="teal" />
								</Sparklines>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SearchBar