import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLlms } from "../services/llmService";
import { isAdmin } from "../services/AuthUserService";
import Layout from "../components/Layout";

const Catalogue = ({ user }) => {
	const [llms, setLlms] = useState([]);
	const [isAdminUser, setIsAdminUser] = useState(false);

	const adminUser = useCallback(async () => {
		const result = await isAdmin(user);
		setIsAdminUser(result);
	}, []);

	const fetchLlms = useCallback(async () => {
		const data = await getLlms();
		setLlms(data);
	}, []);

	useEffect(() => {
		adminUser();
		fetchLlms();
	}, [user]);

	return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					{isAdminUser && (
						<div className="col-span-12">
							<Link to="/llm/add" className="btn btn-primary">
								Add LLM
							</Link>
						</div>
					)}
					<div className="col-span-12 overflow-x-scroll">
						<table className="catalogue table-auto w-full">
							<thead>
								<tr>
									<th>Type</th>
									<th>Name</th>
									<th>Organization</th>
									<th>Created date</th>
									<th>Modality (In; Out)</th>
									<th>Access</th>
									<th>License</th>
									<th>Dependencies</th>
									<th>View</th>
								</tr>
							</thead>
							<tbody>
								{llms.length > 0 ? (
									llms.map((llm) => (
										<tr key={llm.llm_data_id}>
											<td>{llm.type_id}</td>
											<td>{llm.name}</td>
											<td>{llm.organization_id}</td>
											<td>{llm.created_date_id}</td>
											<td>{llm.modality_id}</td>
											<td>
												<div className={`label label-${llm.access_id}`}>
													{llm.access_id}
												</div>
											</td>
											<td>{llm.license_id}</td>
											<td>{llm.dependencies_id}</td>
											<td>
												<Link
													to={`/llm/${llm.llm_data_id}`}
													state={{ data: llm }}
												>
													View
												</Link>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td className="text-center" colSpan="9">
											No LLMs found
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default Catalogue;
