import { NavLink } from "react-router-dom";

import logo from "/assets/images/lighthouse-logo.svg";

const Header = () => {
	return (
		<header>
			<div className="container wrapper py-2.5 items-center">
				<div className="col-span-3">
					<NavLink to="/">
						<img src={logo} className="h-auto w-40" alt="Lighthouse" />
						{/* <svg className="text-red h-auto w-52">
							<use xlinkHref="/assets/images/symbols.svg#logo"></use>
						</svg>
						<p className="sr-only">Lighthouse</p> */}
					</NavLink>
				</div>
				<div className="col-span-9 text-right">
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
					<button className="ml-6 btn btn-primary !mt-0">Sign In</button>
				</div>
			</div>
		</header>
	);
};
export default Header;
