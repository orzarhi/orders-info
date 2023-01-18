import React, { useEffect, useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ordersNew from "~/components/data/ordersNew";
import "../Chart.css";
import { customerName, customerSum } from "./config";

const ChartPie = ({ customer }) => {
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
		series: sum,
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

	const updateData = (data) => {
		setState({
			series: customerSum(data),
			options: {
				labels: customerName(data),
			},
		});
	};
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
