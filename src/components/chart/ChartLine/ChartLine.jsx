import { useEffect, useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ordersNew from "~/components/data/ordersNew";
import "../Chart.css";
import { customerName, customerSum } from "./config";

const ChartLine = ({ customer }) => {
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
				name: "series-1",
				data: sum,
			},
		],
		options: {
			chart: {
				id: "realtime",
				height: 350,
				type: "line",
				animations: {
					enabled: true,
					easing: "linear",
					dynamicAnimation: {
						speed: 1000,
					},
				},
				toolbar: {
					show: true,
				},
				zoom: {
					enabled: true,
				},
				redrawOnWindowResize: true,
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
			},
			title: {
				text: "מכירות",
				align: "left",
				style: {
					fontSize: "30px",
					fontWeight: "bold",
					fontFamily: "ariel",
					color: "#263238",
				},
			},
			markers: {
				size: 0,
			},
			xaxis: {
				categories: name,
			},
			yaxis: {
				categories: sum,
				opposite: true,
			},
			legend: {
				show: false,
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
		<>
			<div className="chart-line">
				<ReactApexChart
					options={state.options}
					series={state.series}
					type="line"
					height={375}
				/>
			</div>
		</>
	);
};

export default ChartLine;
