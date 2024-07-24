import { useState } from "react";
import Plot from "react-plotly.js";

import Layout from "../components/Layout";

const Matrix = () => {
	const [chartData, setChartData] = useState({});

	return (
		<Layout>
			<section className="container wrapper pb-14">
				<div className="col-span-12 flex flex-col justify-evenly items-center gap-3 text-center z-1">
					<h1>LLM Matrix</h1>
					<Plot
						data={[
							{
								x: [1, 2, 3],
								y: [2, 6, 3],
								type: "scatter",
								mode: "markers",
								text: ["Text A", "Text B", "Text C"],
								marker: { color: "red", size: 10 },
							},
						]}
						layout={{
							xaxis: { title: "Business Readiness" },
							yaxis: { title: "Perceived Business Value" },

							width: 960,
							height: 720,
							title: "Lighthouse Magic Quadrant for LLMs",
						}}
					/>
				</div>
			</section>
		</Layout>
	);
};
export default Matrix;
