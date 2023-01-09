import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { agentsSum } from "~/components/data/agentsSum";
import "../Chart.css";

const ChartPie = () => {
	// console.log("🚀  agentsSum", agentsSum);

	const [state, setState] = useState({
		series: [44, 55, 13, 43, 100],
		options: {
			chart: {
				width: 500,
				type: "pie",
				redrawOnWindowResize: true,
			},
			labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 300,
						},
						legend: {
							position: "bottom",
						},
					},
				},
			],
		},
	});

	return (
		<div className="chart-pie">
			<ReactApexChart
				options={state.options}
				series={state.series}
				type="pie"
				height={500}
			/>
		</div>
	);
};

export default ChartPie;
