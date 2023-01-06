import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import orders from "../data/orders";
import "./Chart.css";
const ChartColumn = () => {
	const dataOrders = orders.map((o) => o.data.topItemsLeftInStock);
	// console.log("🚀dataOrders", ...dataOrders)

	const [state, setState] = useState({
		series: [
			{
				name: "Net Profit",
				data: [44, 55, 57, 56, 61, 58, 63, 60],
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
				categories: [
					"בדיקה",
					"בדיקה",
					"בדיקה",
					"בדיקה",
					"בדיקה",
					"בדיקה",
					"בדיקה",
					"בדיקה",
				],
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
