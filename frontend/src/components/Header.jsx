import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "/assets/images/lighthouse-logo.svg";
import { loggedIn, logout } from "../services/AuthUserService";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(loggedIn());
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [searchbarOpen, setSearchbarOpen] = useState(false);	

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
				<div className="flex col-span-1 md:col-span-3 col-start-12 md:col-start-auto justify-center">
					{/* <button
						type="button"
						data-collapse-toggle="navbar-search"
						aria-controls="navbar-search"
						aria-expanded={searchbarOpen}
						id="navBtn"
						className="md:hidden text-red hover:bg-gray-100 focus:outline-none rounded-lg text-sm p-2.5 me-1"
						onClick={() => setSearchbarOpen(!searchbarOpen)}
					>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
						<span className="sr-only">Search</span>
					</button> */}
					<div className="relative hidden md:block mr-5 w-full">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-red "
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
							<span className="sr-only">Search icon</span>
						</div>
						<input
							type="text"
							id="search-navbar"
							className="block w-full p-2 ps-10 text-sm text-gray-900 rounded-lg outline-red outline-1"
							placeholder="Search..."
						/>
					</div>
					<button
						data-collapse-toggle="navbar-search"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red rounded-lg md:hidden"
						aria-controls="navbar-search"
						aria-expanded={navbarOpen}
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
				<div
					className={`col-span-12 md:col-span-7 md:order-3 md:flex flex-col md:flex-row md:justify-end md:items-center mt-5 md:mt-0 ${
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
