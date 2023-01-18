import React, { useEffect, useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ordersNew from "~/components/data/ordersNew";
import "../Chart.css";
import { customerName, customerSum } from "./config";

const ChartColumn = ({ customer }) => {
	const [firstRound, setFirstRound] = useState(false);

	const name = ordersNew.map((m) => m.CDES);
	const sum = ordersNew.map((m) => m.QPRICE);

	const filtered = useMemo(
		() => ordersNew?.filter((a) => a.CDES === customer),
		[customer]
	);

	useEffect(() => {
		if (!firstRound) {
			setFirstRound(true);
			return;
		} else if (filtered.length === 0 || !filtered) {
			return updateData(ordersNew);
		}
		updateData(filtered);
	}, [filtered]);

	const [state, setState] = useState({
		series: [
			{
				name: "Quantity",
				data: sum,
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

	const updateData = (data) => {
		setState({
			series: [
				{
					name: "Sum",
					data: customerSum(data),
				},
			],
			options: {
				xaxis: {
					categories: customerName(data),
				},
			},
		});
	};

	return (
		<div className="chart-column">
			<ReactApexChart
				options={state.options}
				series={state.series}
				type="bar"
				height={350}
			/>
		</div>
	);
};

export default ChartColumn;
