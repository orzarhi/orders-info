import { Checkbox, FormControlLabel, Input } from "@mui/material";
import React, { useState } from "react";
import "./Employees.css";

const Filters = ({ mockData, setData }) => {
	const [atWork, setAtWork] = useState(true);

	const searchName = (value) => {
		setData(
			mockData?.filter((e) =>
				e.name.toLowerCase().includes(value.toLowerCase())
			)
		);
	};
	const searchAtWork = () => {
		setAtWork(!atWork);
		setData(mockData?.filter((e) => e.at_work === atWork));
	};

	return (
		<div className="filters">
			<Input
				type="text"
				className="input-search"
				placeholder="Search by name..."
				onChange={(e) => searchName(e.target.value)}
			/>
			<FormControlLabel
				control={<Checkbox onClick={searchAtWork} />}
				className="checkbox-filter"
				label="At work"
			/>
		</div>
	);
};

export default Filters;
