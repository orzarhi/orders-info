import { Checkbox, FormControlLabel, Input } from "@mui/material";
import React, { useState } from "react";
import "./Employees.css";

const Filters = ({ mockData, setResultsInput }) => {
	const [atWork, setAtWork] = useState(true);

	const searchName = (value) => {
		setResultsInput(
			mockData?.filter((e) =>
				e.name.toLowerCase().includes(value.toLowerCase())
			)
		);
	};
	const searchAtWork = () => {
		setAtWork(!atWork);
		setResultsInput(mockData?.filter((e) => e.at_work === atWork));
	};

	return (
		<>
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
		</>
	);
};

export default Filters;