import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { matrixData } from "../utils/matrixData.js";

import acquisitions from "../utils/acquisitions";
import Layout from "../components/Layout";

Chart.register(CategoryScale);

const Matrix = () => {
  const [chartData, setChartData] = useState({
		labels: matrixData.map((data) => data.year),
		datasets: [
			{
				label: "Users Gained ",
				data: matrixData.map((data) => data.userGain),
				backgroundColor: [
					"rgba(75,192,192,1)",
					"ecf0f1",
					"#50AF95",
					"#f3ba2f",
					"#2a71d0",
				],
				borderColor: "black",
				borderWidth: 2,
			},
		],
	});
	// const { Chart } = await import('chart.js');
	return (
		<Layout>
			<section className="container wrapper pb-14">
				<div className="col-span-12 flex flex-col justify-evenly items-center gap-3 text-center z-1">
					<h1>Matrix</h1>
					<div className="w-[800px]">
						<canvas id="acquisitions"></canvas>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Matrix;
