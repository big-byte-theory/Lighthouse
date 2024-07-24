import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import matrixData from "../utils/matrixData.json";

import Layout from "../components/Layout";

const Matrix = () => {
	const [chartData, setChartData] = useState({});
	const [newXaxis, setNewXaxis] = useState([]);
	const [newYaxis, setNewYaxis] = useState([]);
	const [newModelLabels, setNewModelLabels] = useState([]);
	const [modelUrls, setModelUrls] = useState([]);

	const labelsTop = {
		x: [0.25, 0.75],
		y: [1, 1],
		mode: "text",
		// name: "Top Labels",
		text: ["VISIONARIES", "LEADERS"],
		textposition: "bottom",
		// type: "scatter",
	};
	const labelsBottom = {
		x: [0.25, 0.75],
		y: [0, 0],
		mode: "text",
		// name: "Bottom Labels",
		text: ["NICHE PLAYERS", "CHALLENGERS"],
		textposition: "top",
		// type: "scatter",
		marker: { color: "#a41c30", size: 10 },
	};
	const llmMatrix = () => {
		const newX = [];
		const newY = [];
		const newModelLabels = [];
		const newModelURLs = [];

		matrixData.map((item) => {
			const itemURL = "/llm/" + item.objectId;

			newX.push(item.x);
			newY.push(item.y);
			newModelLabels.push(item.model);
			newModelURLs.push(itemURL);
		});

		setNewXaxis(newX);
		setNewYaxis(newY);
		setNewModelLabels(newModelLabels);
		setModelUrls(newModelURLs);
	};

	const handlePlotClick = (data) => {
		const pointIndex = data.points[0].pointIndex;
		const url = modelUrls[pointIndex];
		if (url) {
			window.open(url, "_self");
		}
	};

	useEffect(() => {
		llmMatrix();
	}, []);

	return (
		<Layout>
			<section className="container wrapper pb-14">
				<div className="col-span-12 flex flex-col justify-evenly items-center gap-3 z-1">
					<h1 className="text-center">LLM Matrix</h1>
					<p>
						Welcome to our comprehensive matrix evaluating various language
						models (LLMs). This interactive visualization plots each model based
						on two key dimensions: Business Readiness and Perceived Business
						Value.
					</p>
					<p>
						This matrix is designed to help you make informed decisions based on
						comprehensive and standardized performance data. Explore the
						visualization to understand the strengths and weaknesses of each
						language model in relation to your business needs.
					</p>
					<div>
						<Plot
							data={[
								{
									x: newXaxis,
									y: newYaxis,
									text: newModelLabels,
									textposition: "top center",
									name: "LLMs",
									type: "scatter",
									mode: "markers+text",
									marker: { color: "#a41c30", size: 10 },
									customdata: modelUrls,
								},
								labelsTop,
								labelsBottom,
							]}
							layout={{
								xaxis: {
									title: "Business Readiness",
									dtick: 0.2,
									range: [0, 1],
								},
								yaxis: {
									title: "Perceived Business Value",
									dtick: 0.2,
									range: [0, 1],
								},
								shapes: [
									{
										layer: "below",
										type: "line",
										x0: 0.5,
										x1: 0.5,
										y0: 0,
										y1: 1,
										fillcolor: "black",
										line: { width: 2, color: "black" },
									},
									{
										layer: "below",
										type: "line",
										x0: 0,
										x1: 1,
										y0: 0.5,
										y1: 0.5,
										fillcolor: "black",
										line: { width: 2, color: "black" },
									},
								],
								width: 960,
								height: 720,
								showlegend: false,
								title:
									"Lighthouse Matrix based on Business Readiness and Perceived Business Value",
							}}
							onClick={handlePlotClick}
						/>
						<div>
							<strong>Quadrants</strong>
							Leader: High in both Business Readiness and Perceived Business
							Value. These models are well-rounded and widely adopted.
							Visionary: High in Perceived Business Value but lower in Business
							Readiness. These models show strong potential but may need further
							refinement. Challenger: High in Business Readiness but lower in
							Perceived Business Value. These models are technically strong but
							lack widespread adoption or perceived utility. Niche Player: Low
							in both Business Readiness and Perceived Business Value. These
							models are specialized or underutilized.
						</div>
					</div>
					<p>
						<strong>Interaction:</strong> Hover over each point to see detailed
						information about the model.
					</p>
				</div>
			</section>
		</Layout>
	);
};
export default Matrix;
