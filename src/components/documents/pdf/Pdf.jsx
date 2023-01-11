import { Button } from "@mui/material";
import clsx from "clsx";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Pdf = ({ data, content, className }) => {
	const exportFile = () => {
		const unit = "pt";
		const size = "A4";
		const orientation = "portrait";

		const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);
		doc.setFontSize(15);

		const title = "Employees";

		const headers = [
			["Id", "Full Name", "Date Birth", "Salary", "At Work"],
		];

		const resultData = data.map((e) => [
			e.id,
			e.name,
			e.date_birth,
			e.salary.toLocaleString(),
			e.at_work,
		]);

		const contentTable = {
			startY: 50,
			head: headers,
			body: resultData,
		};

		doc.text(title, marginLeft, 40);
		doc.autoTable(contentTable);

		doc.save("Employees-info.pdf");
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
