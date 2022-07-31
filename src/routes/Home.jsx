import React from "react";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

const Home = ({ data }) => {
	return (
		<>
			<SearchBar data={data} />
			<Trending />
		</>
	);
};

export default Home;
