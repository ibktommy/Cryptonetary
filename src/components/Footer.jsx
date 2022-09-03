import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Footer = () => {
	return (
		<div>
			<div>
				<div>
					<div>
						<h2>Support</h2>
						<ul>
							<li>Help Center</li>
							<li>Contact Us</li>
							<li>API status</li>
							<li>Documentation</li>
						</ul>
					</div>

					<div>
						<h2>Info</h2>
						<ul>
							<li>About Us</li>
							<li>Careers</li>
							<li>Invest</li>
							<li>Legal</li>
						</ul>
					</div>
				</div>

				<div>
					<div>
						<div>
							<div>
								<ThemeToggleBtn />
							</div>
							<p>Sign up for crypto news</p>
						</div>
            <div>
              <form>
                <input type="email" placeholder="Enter Your Email"/>
                <button>Register</button>
              </form>
              <div>
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebook />
                <FaGithub />
              </div>
            </div>
					</div>
				</div>
			</div>
      <p className="text-center py-4">Powered by CoinGecko API</p>
		</div>
	);
};

export default Footer;
