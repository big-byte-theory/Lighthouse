import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getLlmData } from "../services/llmService";
import { formatDate } from "../utils/formatDate";

const Details = () => {
	const { state } = useLocation();
	const [llmData, setLlmData] = useState({});
	const [newsArticles, setNewsArticles] = useState([]);
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

	const fetchNewsArticles = () => {
		if (llmData !== null && llmData.news_ids !== null) {
			let combinedArticles = [];
			llmData?.news_ids?.forEach((articles) => {
				combinedArticles = [...combinedArticles, ...articles.articles];
			});
			setNewsArticles(combinedArticles);
		}
	};

	useEffect(() => {
		if (details) {
			setLlmData(details);
		} else {
			fetchLlmData();
		}
		fetchNewsArticles();
	}, [details, fetchLlmData, llmData]);

	return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					{isAdmin && (
						<div className="col-span-12 space-x-5">
							<Link
								to="/llm/archive"
								className="btn btn-primary pointer-events-none"
							>
								Archive LLM
							</Link>
							<Link
								to="/llm/delete"
								className="btn btn-primary pointer-events-none"
							>
								Delete LLM
							</Link>
						</div>
					)}
					{llmData.name !== null && (
						<>
							<div className="col-span-12">
								<h1>{llmData.name}</h1>
								<div className="catalogue catalogue-details flex flex-col px-2.5">
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Organization</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Organization that created the model."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.organization_id?.organization}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Description</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Description of the model."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.description_id?.description}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Created Date</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="When the model was created."
											>
												&#128712;
											</span>
										</p>
										<p>{formatDate(llmData?.created_date_id?.created_date)}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Size</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Size (and shape) of the model (e.g., number of parameters in the model)"
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.size_id?.size}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Dependencies</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="A list of assets (e.g., datasets, models, applications) that were used to create this model."
											>
												&#128712;
											</span>
										</p>
										<ul>
											<li>
												{llmData?.dependencies_id?.dependencies.map(
													(dependency, index) => {
														return (
															<span key={index}>
																{llmData?.dependencies_id?.dependencies_llm_ids[
																	index
																] === null ||
																llmData?.dependencies_id?.dependencies_llm_ids[
																	index
																] === undefined ? (
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
										<p className="font-bold min-w-44">
											<span>Modality</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Modalities represented in the model (e.g., Text, Text (English), Code, Code (Python), Video, Image)."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.modality_id?.modality}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>License</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="License of the model."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.license_id?.license}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Analysis</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Description of any analysis that was done on the model."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.analysis_id?.analysis}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Quality Control</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="What measures were taken to ensure quality, safety, and mitigate harms."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.quality_control_id?.quality_control}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Access</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Who can access (and use) this model."
											>
												&#128712;
											</span>
										</p>
										<div
											className={`label label-${llmData?.access_id?.access}`}
										>
											{llmData?.access_id?.access}
										</div>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Training Emissions</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Estimate of the carbon emissions used to create this model."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.training_emissions_id?.training_emissions}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Training Time</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="How much time it took to train this model."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.training_time_id?.training_time}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Training Hardware</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="What hardware was used to train the model."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.training_hardware_id?.training_hardware}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Intended Uses</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Description of what the model can be used for downstream."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.intended_uses_id?.intended_uses}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Prohibited Uses</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Description of what the model should not be used for downstream."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.prohibited_uses_id?.prohibited_uses}</p>
									</div>
									<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
										<p className="font-bold min-w-44">
											<span>Monitoring</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Description of measures taken to monitor downstream uses of this model."
											>
												&#128712;
											</span>
										</p>
										<p>{llmData?.monitoring_id?.monitoring}</p>
									</div>
								</div>
							</div>
							<div className="col-span-12">
								<h3>Deeper Reading</h3>
								<div className="container">
									<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-lg p-5 break-all">
										<p className="font-bold min-w-44">
											<span>URL</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Link to website or paper that provides a detailed description of the model."
											>
												&#128712;
											</span>
										</p>
										<Link to={llmData?.url_id?.url} target="_blank">
											{llmData?.url_id?.url}
										</Link>
									</div>
									<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-lg p-5 break-all">
										<p className="font-bold min-w-44">
											<span>Model Card</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="Link to the model card describing this model."
											>
												&#128712;
											</span>
										</p>
										{llmData?.model_card_id?.model_card !== "unknown" && (
											<Link
												to={llmData?.model_card_id?.model_card}
												target="_blank"
											>
												{llmData?.model_card_id?.model_card}
											</Link>
										)}
										{llmData?.model_card_id?.model_card === "unknown" && (
											<span>{llmData?.model_card_id?.model_card}</span>
										)}
									</div>
									<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-lg p-5 break-all">
										<p className="font-bold min-w-44">
											<span>Feedback</span>
											<span
												className="ml-2 font-normal cursor-help"
												title="How downstream problems with this model should be reported."
											>
												&#128712;
											</span>
										</p>
										{llmData?.feedback_id?.feedback !== "unknown" && (
											<Link to={llmData?.feedback_id?.feedback} target="_blank">
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
								<h3>News</h3>
								{
									<div className="container space-y-7.5 md:space-y-0 pb-7.5">
										{newsArticles.map((news, newsIndex) => (
											<article
												key={newsIndex}
												className="col-span-12 sm:col-span-6 lg:col-span-4 w-full"
											>
												<div className="card group flex flex-col relative w-full md:max-w-sm bg-white rounded-lg h-full overflow-hidden">
													<div className="card-image overflow-hidden max-h-52 lg:h-40">
														<img
															src={news.image_url}
															alt={news.title}
															className="bg-white w-full h-full object-cover object-center group-hover:scale-110 transition-all"
														/>
													</div>
													<div className="card-body flex flex-col flex-1 justify-start h-full p-5">
														<h3 className="card-title mt-0 mb-2 text-lg md:text-2xl font-bold">
															{news.title}
														</h3>
														<p className="card-text mb-3 font-normal text-black hidden md:line-clamp-3">
															{news.description}
														</p>
														<Link
															to={news.link}
															className="inline-flex items-center mt-auto text-sm font-medium text-center text-red after:absolute after:inset-0 after:content-['']"
														>
															View Article &raquo;
														</Link>
													</div>
												</div>
											</article>
										))}
									</div>
								}
							</div>
						</>
					)}
				</section>
			</Layout>
		</>
	);
};
export default Details;
