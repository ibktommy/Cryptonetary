import axios from "axios";
import React, { useEffect, useState } from "react";

const Trending = () => {
	const trendingURL = "https://api.coingecko.com/api/v3/search/trending";

	// Setting State
	const [trending, setTrending] = useState([]);

	// UseEffect to Fetch Data
	useEffect(() => {
		axios.get(trendingURL).then((response) => {
			setTrending(response.data.coins);
		});
	}, []);

	return (
		<div className="rounded-div my-12 py-8 text-primary">
			<h1 className="text-2xl font-bold py-4">Trending Coins</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{trending.map((trendingCoin, index) => {
					return (
						<div
							key={index}
							className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
						>
							<div className="flex w-full items-center justify-between">
								<div className="flex">
									<img
										className="mr-4 rounded-full"
										src={trendingCoin.item.thumb}
										alt={trendingCoin.item.name}
									/>
									<div>
										<p className="font-bold">{trendingCoin.item.name}</p>
										<p>{trendingCoin.item.symbol}</p>
									</div>
								</div>
								<div className="flex items-center">
									<img
										className="w-4 mr-2"
										src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
										alt="bitcoin"
									/>
									<p>{trendingCoin.item.price_btc.toFixed(7)}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Trending;
