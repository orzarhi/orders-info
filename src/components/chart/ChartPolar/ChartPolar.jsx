import { useEffect, useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { agentsSum } from "~/components/data/agentsSum";
import "../Chart.css";
import "./ChartPolar.css";
import { agentsName, agentsValue } from "./data/polarData";

const ChartPolar = ({ agents }) => {
	const [firstRound, setFirstRound] = useState(false);

	const filtered = useMemo(
		() => agentsSum?.filter((a) => a.value === agents?.value),
		[agents]
	);

	useEffect(() => {
		if (!firstRound) {
			setFirstRound(true);
			return;
		} else if (filtered.length === 0 || !filtered) {
			return updateData(agentsSum);
		}
		updateData(filtered);
	}, [filtered]);

	const [state, setState] = useState({
		series: agentsValue(agentsSum),
		options: {
			chart: {
				type: "polarArea",
				redrawOnWindowResize: true,
			},
			stroke: {
				colors: ["#fff"],
			},
			fill: {
				opacity: 0.8,
			},
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
			labels: agentsName(agentsSum),
		},
	});

	const updateData = (data) => {
		setState({
			series: agentsValue(data),
			options: {
				labels: agentsName(data),
			},
		});
	};

	return (
		<div className="chart-polar">
			<ReactApexChart
				options={state.options}
				series={state.series}
				type="polarArea"
				height={290}
			/>
			<hr />
			<div className="chart-polar-info">
				<div>
					<span>סה"כ מכירות</span>
					<br />
					<span className="chart-polar-info-number">₪486,710</span>
				</div>
				<hr />
				<div>
					<span>מוכנים</span>
					<span className="chart-polar-info-number">9</span>
				</div>
			</div>
		</div>
	);
};

export default ChartPolar;
