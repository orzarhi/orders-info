import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import mockData from "~/mockData";
import "../Chart.css";
const ChartArea = () => {
	const name = mockData.map((m) => m.name);
	const salary = mockData.map((m) => m.salary);

	const [state, setState] = useState({
		series: [
			{
				name: "Salary",
				data: salary,
			},
		],
		options: {
			chart: {
				type: "area",
				height: 350,
				zoom: {
					enabled: false,
				},
				redrawOnWindowResize: true,
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "straight",
			},

			title: {
				text: "Fundamental Analysis of Stocks",
				align: "left",
			},
			subtitle: {
				text: "Price Movements",
				align: "left",
			},
			labels: name,
			xaxis: {
				type: "number",
			},
			yaxis: {
				opposite: true,
			},
			legend: {
				horizontalAlign: "left",
			},
		},
	});

	return (
		<div className="chart-area">
			<ReactApexChart
				options={state.options}
				series={state.series}
				type="area"
				height={500}
			/>
		</div>
	);
};

export default ChartArea;
