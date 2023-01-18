import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import orderStatus from "~/constants/orderStatus";
import DateRange from "../dateRange/DateRange";
import InputSelect from "../inputs/InputSelect";
import { filterByName, filterByStatus } from "./config";
import "./Home.css";

const Filters = ({ data, setData }) => {
	const [firstRound, setFirstRound] = useState(false);
	const [status, setStatus] = useState("");

	useEffect(() => {
		if (!firstRound) {
			setFirstRound(true);
			return;
		} else if (status === "" || !status) {
			return setData(data);
		}
		filterByStatus(data, setData, status);
	}, [status]);

	return (
		<div className="filters">
			<DateRange data={data} setData={setData} className="date-range" />
			<InputSelect
				title={"סטטוס"}
				options={orderStatus}
				value={status}
				setValue={setStatus}
				className="input-select-search"
			/>
			<TextField
				id="outlined-search"
				label="לקוח"
				type="search"
				className="input-search"
				placeholder="חפש שם לקוח..."
				onChange={(e) => filterByName(data, setData, e.target.value)}
			/>
		</div>
	);
};

export default Filters;
