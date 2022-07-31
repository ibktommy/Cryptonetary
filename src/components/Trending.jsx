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
			console.log(response.data.coins);
		});
	}, []);

	return <div>Trending</div>;
};

export default Trending;
