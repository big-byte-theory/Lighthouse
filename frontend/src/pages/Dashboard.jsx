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
										<p>Number of LLMs</p>
									</div>
									<div className="col-span-6 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>Widget 1/2</p>
									</div>
									<div className="col-span-6 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>News Stories</p>
									</div>
									<div className="col-span-full bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>Starred LLMs</p>
									</div>
								</>
							)}
							{isAdminUser && (
								<>
									<h1 className="col-span-full">Dashboard - Admin</h1>
									<div className="col-span-4 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>Add New LLM</p>
									</div>
									<div className="col-span-4 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>Number of LLMs</p>
									</div>
									<div className="col-span-4 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>Number of Users</p>
									</div>
									<div className="col-span-6 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>News Stories</p>
									</div>
									<div className="col-span-6 bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>Top 5 models</p>
									</div>
									<div className="col-span-full bg-light-grey rounded-lg p-5 min-h-40 place-content-center text-black font-semibold">
										<p>Widget Full</p>
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
