import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { agentsSum } from "~/components/data/agentsSum";
import mockData from "~/mockData";
import "../Chart.css";

const ChartPie = () => {
	const name = mockData.map((m) => m.name);
	const salary = mockData.map((m) => m.salary);

	const [state, setState] = useState({
		series: salary,
		options: {
			chart: {
				width: 500,
				type: "pie",
				redrawOnWindowResize: true,
			},
			labels: name,
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
