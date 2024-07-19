import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLlms } from "../services/llmService";
import Layout from "../components/Layout";

const Catalogue = () => {
	const [llms, setLlms] = useState([]);

	useEffect(() => {
		const fetchLlms = async () => {
			const data = await getLlms();
			setLlms(data);
		};

		fetchLlms();
	}, []);
	console.log(llms);

	return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					<div className="col-span-12">
						<Link to="/llm/add" className="btn btn-primary">
							Add LLM
						</Link>
					</div>
					<div className="col-span-12 overflow-x-scroll">
						<table className="catalogue table-auto">
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
									llms.map((llm, index) => (
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
												<Link to={`/llm/${llm.llm_data_id}`}>View</Link>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan="6">No LLMs found</td>
									</tr>
								)}
								<tr>
									<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
									<td>Malcolm Lockyer</td>
									<td>1961</td>
									<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
									<td>Malcolm Lockyer</td>
									<td>
										<div className="label label-open">Open</div>
									</td>
									<td>N/A</td>
									<td>N/A</td>
									<td>
										<Link to="/llm/1">View</Link>
									</td>
								</tr>
								<tr>
									<td>Witchy Woman</td>
									<td>The Eagles</td>
									<td>1972</td>
									<td>Witchy Woman</td>
									<td>The Eagles</td>
									<td>
										<div className="label label-closed">Closed</div>
									</td>
									<td>The Eagles</td>
									<td>1972</td>
									<td>
										<Link to="/llm/2">View</Link>
									</td>
								</tr>
								<tr>
									<td>Shining Star</td>
									<td>Earth, Wind, and Fire</td>
									<td>1975</td>
									<td>Shining Star</td>
									<td>Earth, Wind, and Fire</td>
									<td>
										<div className="label label-limited">Limited</div>
									</td>
									<td>Earth, Wind, and Fire</td>
									<td>1975</td>
									<td>
										<Link to="/llm/3">View</Link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default Catalogue;
