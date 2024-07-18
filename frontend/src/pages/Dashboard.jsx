import { useEffect } from "react";
import { isAdmin } from "../services/AuthUserService.js";
import Layout from "../components/Layout.jsx";

const Dashboard = ({ user }) => {
	const adminUser = isAdmin(user);
	useEffect(() => {}, [user]);

	return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					<div className="col-span-12 flex flex-col justify-evenly items-center gap-3 text-center z-1">
						<div className="flex container">
							{!adminUser && (
								<>
									<h1 className="col-span-full">Dashboard - User</h1>
									<div className="col-span-4 bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
										<p>Widget 1/3</p>
									</div>
									<div className="col-span-4 bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
										<p>Widget 1/3</p>
									</div>
									<div className="col-span-4 bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
										<p>Widget 1/3</p>
									</div>
									<div className="col-span-6 bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
										<p>Widget 1/2</p>
									</div>
									<div className="col-span-6 bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
										<p>Widget 1/2</p>
									</div>
									<div className="col-span-full bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
										<p>Favourite LLMs</p>
									</div>
								</>
							)}
							{adminUser && (
								<>
									<h1>Dashboard - Admin</h1>
									<div className="col-span-4 bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
										<p>Add New LLM</p>
									</div>
									<div className="col-span-4 bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
										<p>Widget 1/3</p>
									</div>
									<div className="col-span-4 bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
										<p>Widget 1/3</p>
									</div>
									<div className="col-span-6 bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
										<p>Widget 1/2</p>
									</div>
									<div className="col-span-6 bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
										<p>Widget 1/2</p>
									</div>
									<div className="col-span-full bg-red rounded-lg p-5 min-h-40 place-content-center text-white font-semibold">
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
