import React from "react";
import { Link } from "react-router-dom";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = () => {
	return (
		<div>
			<Link to="/">
				<h1>Cryptonetary</h1>
			</Link>

			<div>
				<ThemeToggleBtn />
			</div>

			<div>
        
      </div>
		</div>
	);
};

export default Navbar;
