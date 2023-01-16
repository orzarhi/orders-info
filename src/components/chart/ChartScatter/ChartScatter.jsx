import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import mockData from "~/mockData";
import "../Chart.css";
const ChartScatter = () => {
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
				height: 350,
				type: "scatter",
				zoom: {
					enabled: true,
					type: "xy",
				},
				redrawOnWindowResize: true,
			},
			xaxis: {
				// tickAmount: 10,
				categories: name,
			},
			yaxis: {
				tickAmount: 7,
			},
		},
	});
	return (
		<div className="chart-scatter">
			<ReactApexChart
				options={state.options}
				series={state.series}
				type="scatter"
				height={350}
			/>
		</div>
	);
};

export default ChartScatter;
