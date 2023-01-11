import { Button } from "@mui/material";
import React from "react";
import * as XLSX from "xlsx";
import clsx from "clsx";

const Xls = ({ data, className, content }) => {
	const handleExportXlsx = () => {
		var wb = XLSX.utils.book_new(),
			ws = XLSX.utils.json_to_sheet(data);

		XLSX.utils.book_append_sheet(wb, ws, "employees-info");

		XLSX.writeFile(wb, "employees-info.xlsx");
	};
	return (
		<Button
			className={clsx(className)}
			variant="contained"
			color="inherit"
			onClick={handleExportXlsx}
		>
			{content}
		</Button>
	);
};

export default Xls;
