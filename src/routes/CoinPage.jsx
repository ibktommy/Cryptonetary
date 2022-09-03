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
		
	return <div>CoinPage</div>;
};

export default CoinPage;
