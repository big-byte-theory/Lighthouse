import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAdmin } from "../services/AuthUserService.js";
import Layout from "../components/Layout.jsx";

const Dashboard = ({ user }) => {
	const [isAdminUser, setIsAdminUser] = useState(false);
	const adminUser = useCallback(async () => {
		const result = await isAdmin(user);
		setIsAdminUser(result);
	}, []);

	useEffect(() => {
		adminUser();
	}, [user]);

	return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					<div className="col-span-12 flex flex-col justify-evenly items-center gap-3 text-center z-1">
						<div className="flex container">
							{!isAdminUser && (
								<>
									<h1 className="col-span-full">Dashboard - User</h1>
									<div className="col-span-4 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<Link to="/catalogue">Catalogue</Link>
									</div>
									<div className="col-span-4 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<Link to="/matrix">Matrix</Link>
									</div>
									<div className="col-span-4 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p className="font-bold text-6xl">580</p>
										<p>Number of LLMs</p>
									</div>
									<div className="col-span-6 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>Starred LLMs</p>
									</div>
									<div className="col-span-6 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>Dashboard Widget</p>
									</div>
									<div className="col-span-full min-h-40 text-left text-black container">
										<h3 className="col-span-12 text-red mb-0">News Stories</h3>
										<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-light-grey rounded-lg p-5">
											<p>Story</p>
										</div>
										<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-light-grey rounded-lg p-5">
											<p>Story</p>
										</div>
										<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-light-grey rounded-lg p-5">
											<p>Story</p>
										</div>
									</div>
								</>
							)}
							{isAdminUser && (
								<>
									<h1 className="col-span-full">Dashboard - Admin</h1>
									<div className="relative col-span-4 bg-red hover:bg-red-dark rounded-lg p-5 min-h-40 place-content-center text-black font-semibold transition-all">
										<Link to="/llm/add" className="text-white hover:text-white after:content-[''] after:inset-0 after:absolute">
											Add New LLM
										</Link>
									</div>
									<div className="col-span-4 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p className="font-bold text-6xl">580</p>
										<p>Number of LLMs</p>
									</div>
									<div className="col-span-4 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p className="font-bold text-6xl">57</p>
										<p>Users Online</p>
									</div>
									<div className="col-span-6 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>Widget Panel</p>
									</div>
									<div className="col-span-6 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>Top 5 models</p>
									</div>
									<div className="col-span-full min-h-40 text-left text-black container">
										<h3 className="col-span-12 text-red mb-0">News Stories</h3>
										<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-light-grey rounded-lg p-5">
											<p>Story</p>
										</div>
										<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-light-grey rounded-lg p-5">
											<p>Story</p>
										</div>
										<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-light-grey rounded-lg p-5">
											<p>Story</p>
										</div>
									</div>
								</>
							)}
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
export default Dashboard;
