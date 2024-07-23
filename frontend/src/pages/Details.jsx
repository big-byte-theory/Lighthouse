import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getLlmData } from "../services/llmService";
import { formatDate } from "../utils/formatDate";

const Details = () => {
	const { state } = useLocation();
	const [llmData, setLlmData] = useState({});
	const { id } = useParams();
	let details = state?.data;
	const isAdmin = state?.adminUser;

	const fetchLlmData = useCallback(async () => {
		try {
			const data = await getLlmData(id);
			setLlmData(data[0]);
		} catch (error) {
			console.error("Error fetching LLM data: ", error);
		}
	}, [id]);

	useEffect(() => {
		if (details) {
			setLlmData(details);
		} else {
			fetchLlmData();
		}
	}, [details, fetchLlmData]);
	console.log(llmData.dependencies_id);

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
					{llmData.name !== null && (
						<>
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
										<p>{formatDate(llmData?.created_date_id?.created_date)}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">URL</p>
										<Link to={llmData?.url_id?.url}>
											{llmData?.url_id?.url}
										</Link>
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
												{llmData?.dependencies_id?.dependencies.map(
													(dependency, index) => {
														return (
															<span key={index}>
																{llmData?.dependencies_id?.dependencies_llm_ids[index] === null ||
																llmData?.dependencies_id?.dependencies_llm_ids[index] === undefined ? (
																	<span>{dependency}</span>
																) : (
																	<Link
																		to={`/llm/${llmData?.dependencies_id?.dependencies_llm_ids[index]?.llm_data_id}`}
																	>
																		{dependency}
																	</Link>
																)}
																{index <
																llmData?.dependencies_id?.dependencies.length -
																	1
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
										<div
											className={`label label-${llmData?.access_id?.access}`}
										>
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
								</div>
							</div>
							<div className="col-span-12">
								<h4>News</h4>
								{llmData?.news_ids?.map((articles, index) => (
									<div key={index} className="container">
										{articles.articles.map((news, newsIndex) => (
											<article
												key={newsIndex}
												className="col-span-6 lg:col-span-4 w-full"
											>
												<div className="card group relative max-w-sm bg-white rounded-lg h-full overflow-hidden aspect-card">
													<div className="card-image overflow-hidden max-h-52 h-48">
														<img
															src={news.image_url}
															alt={news.title}
															className="bg-white w-full object-cover object-center group-hover:scale-110 transition-all"
														/>
													</div>
													<div className="card-body flex flex-col justify-start h-full p-5">
														<h2 className="card-title mb-2 md:text-2xl font-bold">
															{news.title}
														</h2>
														<p className="card-text mb-3 font-normal text-black hidden md:line-clamp-3">
															{news.description}
														</p>
														<Link
															to={news.link}
															className="inline-flex items-center text-sm font-medium text-center text-red after:absolute after:inset-0 after:content-['']"
														>
															View Article &raquo;
														</Link>
													</div>
												</div>
											</article>
										))}
									</div>
								))}
							</div>
						</>
					)}
				</section>
			</Layout>
		</>
	);
};
export default Details;
