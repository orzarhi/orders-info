import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import clsx from "clsx";

const InputSelect = ({ options, title, setValue, className }) => {
	return (
		<Autocomplete
			id="combo-box-demo"
			options={options}
			onChange={(_, value) => setValue(value)}
			renderInput={(params) => (
				<TextField
					style={{
						direction: "rtl",
						textAlign: "center",
						width: "250px",
					}}
					className={clsx(className)}
					variant="outlined"
					{...params}
					label={title}
				/>
			)}
		/>
	);
};

export default InputSelect;
