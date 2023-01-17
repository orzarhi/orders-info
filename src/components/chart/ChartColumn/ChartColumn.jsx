import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import mockData from "~/mockData";
import ordersData from "../../data/ordersNew";
import "../Chart.css";
const ChartColumn = () => {
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
				type: "bar",
				height: 350,
				redrawOnWindowResize: true,
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "10%",
					endingShape: "rounded",
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ["transparent"],
			},
			xaxis: {
				categories: name,
			},

			fill: {
				opacity: 1,
			},
		},
	});

	return (
		<div className="chart-column">
			<ReactApexChart
				options={state.options}
				series={state.series}
				type="bar"
				height={350}
				// width={800}
			/>
		</div>
	);
};

export default ChartColumn;
