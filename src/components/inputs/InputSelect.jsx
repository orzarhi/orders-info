import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import "./InputSelect.css";

const InputSelect = ({ options, title, setValue }) => {
	return (
		<Autocomplete
			id="combo-box-demo"
			options={options}
			onChange={(e, value) => setValue(value)}
			renderInput={(params) => (
				<TextField
					style={{
						direction: "rtl",
						textAlign: "center",
						width: "250px",
					}}
					variant="outlined"
					{...params}
					label={title}
				/>
			)}
		/>
	);
};

export default InputSelect;
