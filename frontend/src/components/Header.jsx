import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "/assets/images/lighthouse-logo.svg";
import { loggedIn, logout } from "../services/AuthUserService";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(loggedIn());
	const [navbarOpen, setNavbarOpen] = useState(false);

	useEffect(() => {
		setIsLoggedIn(loggedIn());
	}, [isLoggedIn]);

	return (
		<header className="mb-10">
			<nav className="container wrapper pt-2.5 pb-5 md:py-2.5 items-center border-b border-gray-300">
				<div className="logo col-span-2">
					<NavLink to="/">
						<img src={logo} className="h-auto w-40" alt="Lighthouse" />
					</NavLink>
				</div>
				<div
					className={`col-span-12 md:col-span-10 md:order-3 md:flex flex-col md:flex-row md:justify-end md:items-center mt-5 md:mt-0 ${
						navbarOpen ? "block" : "hidden"
					}`}
				>
					{isLoggedIn ? (
						<>
							<ul className="space-y-4 md:space-y-0 md:space-x-5">
								<li className="md:inline-block">
									<NavLink to="/dashboard">Dashboard</NavLink>
								</li>
								<li className="md:inline-block">
									<NavLink to="/catalogue">Catalogue</NavLink>
								</li>
								<li className="md:inline-block">
									<NavLink to="/matrix">Matrix</NavLink>
								</li>
							</ul>
							<button
								onClick={() => logout()}
								className="md:ml-6 btn btn-primary md:!mt-0"
							>
								Logout
							</button>
						</>
					) : (
						<Link to="/login" className="ml-6 btn btn-primary !mt-0">
							Sign In
						</Link>
					)}
				</div>
			</nav>
		</header>
	);
};
export default Header;
