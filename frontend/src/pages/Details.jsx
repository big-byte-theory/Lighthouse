import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const Details = () => {
	// TODO: Navigate directly to this page not from catalogue, 
	// TODO: if state is null, query API by params id
	const { state } = useLocation();
	console.log(state.data);
	const details = state.data;

	return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					<div className="col-span-12">
						<h1>{details.name}</h1>
						<div className="catalogue flex flex-col px-2.5">
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Organization</p>
								<p>{details.organization_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Description</p>
								<p>{details.description_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Created Date</p>
								<p>{details.created_date_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">URL</p>
								<Link to={details.url_id}>{details.url_id}</Link>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Model Card</p>
								<p>{details.model_card_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Modality</p>
								<p>{details.modality_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Analysis</p>
								<p>{details.analysis_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Size</p>
								<p>{details.size_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Dependencies</p>
								<ul>
									<li>
										<Link to={`/llm/{ details.dependencies_id }`}>
											{details.dependencies_id}
										</Link>
									</li>
								</ul>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Training Emissions</p>
								<p>{details.training_emissions_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Training Time</p>
								<p>{details.training_time_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Training Hardware</p>
								<p>{details.training_hardware_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Quality Control</p>
								<p>{details.quality_control_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Access</p>
								<div className={`label label-${details.access_id}`}>
									{details.access_id}
								</div>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">License</p>
								<p>{details.license_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Intended Uses</p>
								<p>{details.intended_uses_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Prohibited Uses</p>
								<p>{details.prohibited_uses_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Monitoring</p>
								<p>{details.monitoring_id}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Feedback</p>
								<Link to={details.feedback_id}>{details.feedback_id}</Link>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
export default Details;
