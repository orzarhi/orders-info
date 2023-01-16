import React, { useEffect, useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import mockData from "../../../mockData";
import "../Chart.css";
import { customerName, customerSalary } from "./config";
const ChartLineDemo = ({ customer }) => {
	const [firstRound, setFirstRound] = useState(false);

	const name = mockData.map((m) => m.name);
	const salary = mockData.map((m) => m.salary);

	const filtered = useMemo(
		() => mockData?.filter((a) => a.name === customer),
		[customer]
	);

	useEffect(() => {
		if (!firstRound) {
			setFirstRound(true);
			return;
		} else if (filtered.length === 0 || !filtered) {
			return updateData(mockData);
		}
		updateData(filtered);
	}, [filtered]);

	const [state, setState] = useState({
		series: [
			{
				name: "series-1",
				data: salary,
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
				text: "Dynamic Updating Chart",
				align: "left",
			},
			markers: {
				size: 0,
			},
			xaxis: {
				categories: name,
			},
			yaxis: {
				categories: salary,
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
					name: "Salary",
					data: customerSalary(data),
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

export default ChartLineDemo;
