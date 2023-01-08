import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import orders from "~/components/data/orders";
import {
	countLeftInStock,
	countOrdered,
	ordersDataName,
} from "./data/stackedData";
import "../Chart.css";

const ChartStacked = () => {
	const [state, setState] = useState({
		series: [
			{
				name: "מלאי",
				data: countLeftInStock(orders),
			},
			{
				name: "מכירות",
				data: countOrdered(orders),
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
				categories: ordersDataName(orders),
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
