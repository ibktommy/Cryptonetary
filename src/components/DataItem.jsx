import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const dataItem = ({ dataItem }) => {
	return (
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
	);
};

export default dataItem;
