import { useEffect, useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ordersNew from "~/components/data/ordersNew";
import "../Chart.css";
import { customerName, customerSum } from "./config";

const ChartStacked = ({ customer }) => {
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
				name: "מלאי",
				data: name,
			},
			{
				name: "מכירות",
				data: sum,
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
		<div className="chart-stacked">
			<ReactApexChart
				options={state.options}
				series={state.series}
				type="bar"
				height={355}
			/>
		</div>
	);
};

export default ChartStacked;
