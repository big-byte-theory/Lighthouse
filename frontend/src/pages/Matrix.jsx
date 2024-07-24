import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import matrixData from "../utils/matrixData.json";

import Layout from "../components/Layout";

const Matrix = () => {
	const [newXLeadersAxis, setNewXLeadersAxis] = useState([]);
	const [newYLeadersAxis, setNewYLeadersAxis] = useState([]);
	const [newLeadersLabels, setNewLeadersLabels] = useState([]);
	const [leadersUrls, setLeadersUrls] = useState([]);
	const [newXvisionaryAxis, setNewXvisionaryAxis] = useState([]);
	const [newYvisionaryAxis, setNewYvisionaryAxis] = useState([]);
	const [newVisionaryLabels, setNewVisionaryLabels] = useState([]);
	const [visionaryUrls, setVisionaryUrls] = useState([]);
	const [newXnichePlayersAxis, setNewXnichePlayersAxis] = useState([]);
	const [newYnichePlayersAxis, setNewYnichePlayersAxis] = useState([]);
	const [newNichePlayersLabels, setNewNichePlayersLabels] = useState([]);
	const [nichePlayersUrls, setNichePlayersUrls] = useState([]);
	const [newXchallengersAxis, setNewXchallengersAxis] = useState([]);
	const [newYchallengersAxis, setNewYchallengersAxis] = useState([]);
	const [newChallengersLabels, setNewChallengersLabels] = useState([]);
	const [challengersUrls, setChallengersUrls] = useState([]);

	const labels = [
		{
			x: 0.25,
			y: 1,
			xref: "paper",
			yref: "paper",
			text: "VISIONARIES",
			showarrow: false,
			font: {
				size: 14,
				color: "#FFF",
			},
			bgcolor: "#302d6e",
			bordercolor: "#302d6e",
			borderwidth: 2,
			xanchor: "center",
			yanchor: "top",
			hovertext:
				"High in Perceived Business Value but lower in Business Readiness. <br />These models show strong potential but may need further refinement.",
		},
		{
			x: 0.75,
			y: 1,
			xref: "paper",
			yref: "paper",
			text: "LEADERS",
			showarrow: false,
			font: {
				size: 14,
				color: "#FFF",
			},
			bgcolor: "#0C6419",
			bordercolor: "#0C6419",
			borderwidth: 2,
			xanchor: "center",
			yanchor: "top",
			hovertext:
				"High in both Business Readiness and Perceived Business Value. <br />These models are well-rounded and widely adopted.",
		},
		{
			x: 0.25,
			y: 0,
			xref: "paper",
			yref: "paper",
			text: "NICHE PLAYERS",
			showarrow: false,
			font: {
				size: 14,
				color: "#FFF",
			},
			bgcolor: "#333333",
			bordercolor: "#333333",
			borderwidth: 2,
			xanchor: "center",
			yanchor: "bottom",
			hovertext:
				"Low in both Business Readiness and Perceived Business Value. <br />These models are specialized or underutilized.",
		},
		{
			x: 0.75,
			y: 0,
			xref: "paper",
			yref: "paper",
			text: "CHALLENGERS",
			showarrow: false,
			font: {
				size: 14,
				color: "#FFF",
			},
			bgcolor: "#a41c30",
			bordercolor: "#a41c30",
			borderwidth: 2,
			xanchor: "center",
			yanchor: "bottom",
			hovertext:
				"High in Business Readiness but lower in Perceived Business Value. <br />These models are technically strong but lack widespread adoption or perceived utility.",
		},
	];

	const llmMatrix = () => {
		const newXleaders = [];
		const newYleaders = [];
		const newXnichePlayers = [];
		const newYnichePlayers = [];
		const newXchallengers = [];
		const newYchallengers = [];
		const newXvisionary = [];
		const newYvisionary = [];
		const newLeadersText = [];
		const newNichePlayersText = [];
		const newChallengersText = [];
		const newVisionaryText = [];
		const newLeadersLink = [];
		const newNichePlayersLink = [];
		const newChallengersLink = [];
		const newVisionaryLink = [];

		matrixData.map((item) => {
			const itemURL = "/llm/" + item.objectId;

			if (item.quadrant === "Leader") { 
				newXleaders.push(item.x);
				newYleaders.push(item.y);
				newLeadersText.push(item.model);
				newLeadersLink.push(itemURL);						
			}
			if (item.quadrant === "Visionary") { 
				newXvisionary.push(item.x);
				newYvisionary.push(item.y);
				newVisionaryText.push(item.model);
				newVisionaryLink.push(itemURL);
			}
			if (item.quadrant === "Niche Player") { 
				newXnichePlayers.push(item.x);
				newYnichePlayers.push(item.y);
				newNichePlayersText.push(item.model);
				newNichePlayersLink.push(itemURL);
			}
			if (item.quadrant === "Challenger") { 
				newXchallengers.push(item.x);
				newYchallengers.push(item.y);
				newChallengersText.push(item.model);
				newChallengersLink.push(itemURL);
			}
		});

		setNewXLeadersAxis(newXleaders);
		setNewYLeadersAxis(newYleaders);
		setNewLeadersLabels(newLeadersText);
		setLeadersUrls(newLeadersLink);
		setNewXvisionaryAxis(newXvisionary);
		setNewYvisionaryAxis(newYvisionary);
		setNewVisionaryLabels(newVisionaryText);
		setVisionaryUrls(newVisionaryLink);
		setNewXnichePlayersAxis(newXnichePlayers);
		setNewYnichePlayersAxis(newYnichePlayers);
		setNewNichePlayersLabels(newNichePlayersText);
		setNichePlayersUrls(newNichePlayersLink);
		setNewXchallengersAxis(newXchallengers);
		setNewYchallengersAxis(newYchallengers);
		setNewChallengersLabels(newChallengersText);
		setChallengersUrls(newChallengersLink);
	};

	const handlePlotClick = (data) => {
		const url = data.points[0].customdata;
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
					<div>
						<p>
							Welcome to our comprehensive matrix evaluating various language
							models (LLMs). This interactive visualization plots each model based
							on two key dimensions:
							<ul className="pt-2.5">
								<li>
									<strong>Business Readiness:</strong> Reflects the model's
									performance across various accuracy and benchmark tests.
								</li>
								<li>
									<strong>Perceived Business Value:</strong> Adjusts for the model's popularity and capability scores,
									indicating its practical utility and adoption in the industry.
								</li>
							</ul>
						</p>
						<p className="mt-5 mb-7.5">
							This matrix is designed to help you make informed decisions based on
							comprehensive and standardized performance data. Explore the
							visualization to understand the strengths and weaknesses of each
							language model in relation to your business needs.
						</p>
					</div>
					<Plot
						data={[
							{
								x: newXLeadersAxis,
								y: newYLeadersAxis,
								text: newLeadersLabels,
								textposition: "top center",
								name: "Leaders",
								type: "scatter",
								mode: "markers+text",
								marker: { color: "#0C6419", size: 10 },
								customdata: leadersUrls,
							},
							{
								x: newXvisionaryAxis,
								y: newYvisionaryAxis,
								text: newVisionaryLabels,
								textposition: "top center",
								name: "Visionaries",
								type: "scatter",
								mode: "markers+text",
								marker: { color: "#302d6e", size: 10 },
								customdata: visionaryUrls,
							},
							{
								x: newXnichePlayersAxis,
								y: newYnichePlayersAxis,
								text: newNichePlayersLabels,
								textposition: "top center",
								name: "Niche Players",
								type: "scatter",
								mode: "markers+text",
								marker: { color: "#797584", size: 10 },
								customdata: nichePlayersUrls,
							},
							{
								x: newXchallengersAxis,
								y: newYchallengersAxis,
								text: newChallengersLabels,
								textposition: "top center",
								name: "Challengers",
								type: "scatter",
								mode: "markers+text",
								marker: { color: "#a41c30", size: 10 },
								customdata: challengersUrls,
							},
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
							annotations: labels,
							style: {width: "100%", height: "100%"},
							showlegend: false,
							title:
								"Lighthouse Matrix based on Business Readiness and Perceived Business Value",
						}}
						onClick={handlePlotClick}
					/>
					<p>
						<strong>Interaction:</strong>
						<br />
						Hover over each point to see detailed information about the model.
						<br />
						Click on a point to view the model's detailed information.
					</p>
				</div>
			</section>
		</Layout>
	);
};
export default Matrix;
