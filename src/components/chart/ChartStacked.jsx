import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import orders from "../data/orders";
import { reducer } from "../utils/reduce/reduceArray";
import "./Chart.css";

const ChartStacked = () => {
	const ordersData = orders.map((o) => o.data.topItemsLeftInStock);

	const reduceData = reducer(ordersData);
	const name = reduceData.map((o) => o.name);
	const countLeftInStock = reduceData.map((o) => o.countLeftInStock);
	const countOrdered = reduceData.map((o) => o.countOrdered);

	// const ordersData = orders
	// .flatMap((o) => o.data.topItemsLeftInStock)
	// .map((i) => ({ label: i.name, value: i.id }));

	const [state, setState] = useState({
		series: [
			{
				name: "מלאי",
				data: countLeftInStock,
			},
			{
				name: "מכירות",
				data: countOrdered,
			},
		],
		options: {
			chart: {
				type: "bar",
				height: 350,
				stacked: true,
				stackType: "100%",
				redrawOnWindowResize: true,
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						legend: {
							position: "bottom",
							offsetX: -10,
							offsetY: 0,
						},
					},
				},
			],
			xaxis: {
				categories: name,
			},
			yaxis: {
				opposite: true,
			},
			fill: {
				opacity: 1,
			},
			legend: {
				position: "right",
				offsetX: 0,
				offsetY: 50,
			},
		},
	});

	return (
		<div className="chart-stacked">
			<ReactApexChart
				options={state.options}
				series={state.series}
				type="bar"
				height={355}
				// width={820}
			/>
		</div>
	);
};

export default ChartStacked;
