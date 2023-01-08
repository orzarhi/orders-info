import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { Button } from "@mui/material";
import clsx from "clsx";

const Pdf = ({ content, className }) => {
	const exportFile = () => {
		const doc = new jsPDF();
		doc.autoTable({ html: "#my-table" });

		doc.save("table.pdf");
	};

	return (
		<Button
			className={clsx(className)}
			variant="contained"
			color="inherit"
			onClick={exportFile}
		>
			{content}
		</Button>
	);
};

export default Pdf;
