import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { Button } from "@mui/material";
import "./Pdf.css";

const Pdf = () => {
	const exportFile = () => {
		const doc = new jsPDF();
		doc.autoTable({ html: "#my-table" });

		doc.save("table.pdf");
	};

	return (
		<Button
			className="pdf"
			variant="contained"
			color="inherit"
			onClick={exportFile}
		>
			Export to pdf
		</Button>
	);
};

export default Pdf;
