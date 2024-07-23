import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { getLlmData } from "../services/llmService";

const Details = () => {
	// TODO: Navigate directly to this page not from catalogue,
	// TODO: if state is null, query API by params id
	const { state } = useLocation();
	const [llmData, setLlmData] = useState({});
	let details = state.data;
	const isAdmin = state.adminUser;

	const fetchLlmData = useCallback(async () => {
		console.log("fetching data");
		const data = await getLlmData();
		details = data;
	}, [details]);

	const dateString = llmData?.created_date_id?.created_date;
	const dateObject = new Date(dateString);
	const formattedDate = dateObject.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	useEffect(() => {
		if (details) {
			setLlmData(details);
		} else {
			fetchLlmData();
		}
	}, [fetchLlmData]);

	console.log(llmData);
	// console.log("article", llmData?.news_ids[0]?.articles);

	return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					{isAdmin && (
						<div className="col-span-12">
							<Link to="/llm/archive" className="btn btn-primary">
								Archive LLM
							</Link>
							<Link to="/llm/delete" className="btn btn-primary">
								Delete LLM
							</Link>
						</div>
					)}
					<div className="col-span-12">
						<h1>{llmData.name}</h1>
						<div className="catalogue flex flex-col px-2.5">
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Organization</p>
								<p>{llmData?.organization_id?.organization}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Description</p>
								<p>{llmData?.description_id?.description}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Created Date</p>
								<p>{formattedDate}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">URL</p>
								<Link to={llmData?.url_id?.url}>{llmData?.url_id?.url}</Link>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Model Card</p>
								<p>{llmData?.model_card_id?.model_card}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Modality</p>
								<p>{llmData?.modality_id?.modality}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Analysis</p>
								<p>{llmData?.analysis_id?.analysis}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Size</p>
								<p>{llmData?.size_id?.size}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Dependencies</p>
								<ul>
									<li>
										{details.dependencies_id.dependencies.map(
											(dependency, index) => {
												return (
													<span key={index}>
														{details.dependencies_id.dependencies_llm_ids[
															index
														] === null && <span>{dependency}</span>}
														{details.dependencies_id.dependencies_llm_ids[
															index
														] !== null && (
															<Link
																to={`/llm/${details.dependencies_id.dependencies_llm_ids[index]?.llm_data_id}`}
															>
																{dependency}
																{}
															</Link>
														)}
														{index <
														details.dependencies_id.dependencies.length - 1
															? ", "
															: ""}
													</span>
												);
											}
										)}
									</li>
								</ul>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Training Emissions</p>
								<p>{llmData?.training_emissions_id?.training_emissions}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Training Time</p>
								<p>{llmData?.training_time_id?.training_time}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Training Hardware</p>
								<p>{llmData?.training_hardware_id?.training_hardware}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Quality Control</p>
								<p>{llmData?.quality_control_id?.quality_control}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Access</p>
								<div className={`label label-${llmData?.access_id?.access}`}>
									{llmData?.access_id?.access}
								</div>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">License</p>
								<p>{llmData?.license_id?.license}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Intended Uses</p>
								<p>{llmData?.intended_uses_id?.intended_uses}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Prohibited Uses</p>
								<p>{llmData?.prohibited_uses_id?.prohibited_uses}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Monitoring</p>
								<p>{llmData?.monitoring_id?.monitoring}</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">Feedback</p>
								{llmData?.feedback_id?.feedback !== "unknown" && (
									<Link to={llmData?.feedback_id?.feedback}>
										{llmData?.feedback_id?.feedback}
									</Link>
								)}
								{llmData?.feedback_id?.feedback === "unknown" && (
									<span>{llmData?.feedback_id?.feedback}</span>
								)}
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold min-w-44">News</p>
								{llmData?.news_ids?.map((articles, index) => (
									<div key={index}>
										{articles.articles.map((news, newsIndex) => (
											<div key={newsIndex}>
												<p>{news.title}</p>
												<p>{news.description}</p>
												<Link to={news.link}>{news.link}</Link>
											</div>
										))}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="col-span-12">

					</div>
				</section>
			</Layout>
		</>
	);
};
export default Details;
