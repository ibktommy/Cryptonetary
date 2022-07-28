import React from "react";
import { Link } from "react-router-dom";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	return (
		<div className="rounded-div flex items-center justify-between h-20 font-bold">
			<Link to="/">
				<h1 className="text-2xl">Cryptonetary</h1>
			</Link>

			<div className="hidden md:block">
				<ThemeToggleBtn />
			</div>

			<div className="hidden md:block">
				<Link to="/login" className="p-4 hover:text-accent">
					Login
				</Link>
				<Link
					to="/register"
					className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
				>
					Register
				</Link>
			</div>

			{/* MENU ICON FOR MOBILE DEVICES */}
			<div className="block md:hidden cursor-pointer z-10">
				<AiOutlineMenu />
			</div>

			{/* MOBILE MENU */}
			<div className="md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10">
				<ul className="w-full p-4">
					<li className="border-b py-6">
						<Link to="/">Home</Link>
					</li>
					<li className="border-b py-6">
						<Link to="/">Account</Link>
					</li>
					<li className="py-6">
						<ThemeToggleBtn />
					</li>
				</ul>

				<div className="flex flex-col w-full p-4">
					<Link to="/login">
						<button className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl">
							Login
						</button>
					</Link>
					<Link to="/register">
						<button className="w-full my-2 p-3 bg-button text-btnText border border-secondary rounded-2xl shadow-xl">
							Register
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
