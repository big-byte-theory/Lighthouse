import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className="container wrapper items-center">
				<div className="col-span-4">
					<NavLink to="/">
						<svg className="text-red h-auto w-52">
							<use xlinkHref="/assets/images/symbols.svg#logo"></use>
						</svg>
						<p className="sr-only">Lighthouse</p>
          </NavLink>
				</div>
				<div className="col-span-8">
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
					<button className="ml-6 btn btn-primary">Sign In</button>
				</div>
			</div>
		</header>
	);
};
export default Header;
