import React, { useEffect, useState } from "react";
import axios from "axios";

const CoinPage = () => {
	// Setting urlData to state
	const [coin, setCoin] = useState()

	// URL
	const url =
		"https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true";

		// Fethcing Data in useEffect with the dependency being the url
		useEffect(() => {
			axios.get(url).then((response) => {
				setCoin(response.data)
				console.log(response.data)
			})
		}, [url])

	return (
		<div>
			<div>
				<img src={coin.image?.large} alt={coin.name} />
				<div>
					<p>{coin?.name} price</p>
					<p>({coin.symbol?.toUpperCase}) / USD</p>
				</div>
			</div>

			<div>
				<div>
					<div>
						{coin.market_data?.current_price ? (
							<p>${coin.market_data.current_price.usd.toLocaleString()}</p>
						) : null
						}
						<p>7 Days</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default CoinPage;
