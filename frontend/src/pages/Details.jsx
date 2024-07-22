import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const Details = () => {
	// TODO: Navigate directly to this page not from catalogue,
	// TODO: if state is null, query API by params id
	const { state } = useLocation();
	const details = state.data;
	console.log("deets", details);

	return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					<div className="col-span-12">
						<h1>{details.name}</h1>
						<div className="catalogue flex flex-col px-2.5">
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Organization</p>
								<p>{details.organization_id.organization}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Description</p>
								<p>{details.description_id.description}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Created Date</p>
								<p>{details.created_date_id.created_date}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">URL</p>
								<Link to={details.url_id.url}>{details.url_id.url}</Link>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Model Card</p>
								<p>{details.model_card_id.model_card}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Modality</p>
								<p>{details.modality_id.modality}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Analysis</p>
								<p>{details.analysis_id.analysis}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Size</p>
								<p>{details.size_id.size}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Dependencies</p>
								<ul>
									<li>
										{/* {details.dependencies_id.dependencies} */}
										{details.dependencies_id.dependencies.map(
											(dependency, index) => {
												return `${
													(
														<Link
															to={`/llm/{ dependency.dependencies_llm_ids }`}
														>
															{dependency}
														</Link>
													) +
													(index <
													details.dependencies_id.dependencies.length - 1
														? ", "
														: "")
												}`;
											}
										)}
									</li>
								</ul>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Training Emissions</p>
								<p>{details.training_emissions_id.training_emissions}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Training Time</p>
								<p>{details.training_time_id.training_time}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Training Hardware</p>
								<p>{details.training_hardware_id.training_hardware}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Quality Control</p>
								<p>{details.quality_control_id.quality_control}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Access</p>
								<div className={`label label-${details.access_id.access}`}>
									{details.access_id.access}
								</div>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">License</p>
								<p>{details.license_id.license}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Intended Uses</p>
								<p>{details.intended_uses_id.intended_uses}</p>
							</div>
							{/* <div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Prohibited Uses</p>
								<p>{details.prohibited_uses_id.prohibited_uses}</p>
							</div> */}
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Monitoring</p>
								<p>{details.monitoring_id.monitoring}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Feedback</p>
								<Link to={details.feedback_id.feedback}>
									{details.feedback_id.feedback}
								</Link>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
export default Details;
