import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "/assets/images/lighthouse-logo.svg";
import { loggedIn, logout } from "../services/AuthUserService";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(loggedIn());

	useEffect(() => {
		setIsLoggedIn(loggedIn());
	}, [isLoggedIn]);

	return (
		<header className="mb-10">
			<div className="container wrapper py-2.5 items-center border-b border-gray-300">
				<div className="col-span-3">
					<NavLink to="/">
						<img src={logo} className="h-auto w-40" alt="Lighthouse" />
					</NavLink>
				</div>
				<div className="col-span-9 text-right">
					{isLoggedIn ? (
						<>
							<nav className="inline-flex">
								<ul className="space-x-5">
									<li className="inline-block">
										<NavLink to="/">Dashboard</NavLink>
									</li>
									<li className="inline-block">
										<NavLink to="/catalogue">Catalogue</NavLink>
									</li>
									<li className="inline-block">
										<NavLink to="/matrix">Matrix</NavLink>
									</li>
								</ul>
							</nav>
							<button
								onClick={() => logout()}
								className="ml-6 btn btn-primary !mt-0"
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
			</div>
		</header>
	);
};
export default Header;
