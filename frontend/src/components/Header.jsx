import { NavLink } from "react-router-dom";

import logo from "/assets/images/lighthouse-logo.svg";

const Header = () => {
	return (
		<header>
			{/* <div className="container wrapper py-2.5 items-center">
				<div className="col-span-3">
					<NavLink to="/">
						<img src={logo} className="h-auto w-40" alt="Lighthouse" />
					</NavLink>
				</div>
				<div className="col-span-9 text-right">
					<nav className="inline-flex">
						<div className="lg:hidden">
							<button className="navbar-burger flex items-center text-red p-3">
								<svg
									className="block h-4 w-4 fill-current"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Mobile menu</title>
									<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
								</svg>
							</button>
						</div>
						<div className="">
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
							<button className="ml-6 btn btn-primary !mt-0">Sign In</button>
						</div>
					</nav>
				</div>
			</div> */}

			<nav className="bg-blue border-gray-200 dark:bg-light-cream">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<NavLink to="/">
						<img src={logo} className="h-auto w-40" alt="Lighthouse" />
					</NavLink>
					<div className="flex md:order-2">
						<button
							type="button"
							data-collapse-toggle="navbar-search"
							aria-controls="navbar-search"
							aria-expanded="false"
							id="navBtn"
							className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5 me-1"
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
						</button>
						<div className="relative hidden md:block">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
								className="block w-full p-2 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
								placeholder="Search..."
							/>
						</div>
						<button
							data-collapse-toggle="navbar-search"
							type="button"
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
							aria-controls="navbar-search"
							aria-expanded="false"
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
						className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
						id="navbar-search"
					>
						<div className="relative mt-3 md:hidden">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
							</div>
							<input
								type="text"
								id="search-navbar"
								className="block w-full p-2 ps-10 text-sm text-gray-900 rounded-lg dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
								placeholder="Search..."
							/>
						</div>
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
							<li>
								<NavLink
									to="/"
									className="block py-2 px-3 text-black md:p-0 md:dark:text-red-dark"
									aria-current="page"
								>
									Dashboard
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/catalogue"
									className="block py-2 px-3 text-gray-900 md:hover:text-red-dark md:p-0 md:dark:hover:text-red-dark dark:text-black dark:hover:text-black"
								>
									Catalogue
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/matrix"
									className="block py-2 px-3 text-gray-900 md:hover:text-blue md:p-0 dark:text-black md:dark:hover:text-red-dark dark:hover:text-black"
								>
									Matrix
								</NavLink>
							</li>
						</ul>
					</div>
						<button className="ml-6 btn btn-primary !mt-0 md:order-3">Sign In</button>
				</div>
			</nav>
		</header>
	);
};
export default Header;
