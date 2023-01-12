import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pdf from "~/components/documents/pdf/Pdf";
import mockData from "~/mockData";
import Xls from "../documents/xls/Xls";
import Table from "../table/Table";
import "./Employees.css";
import Filters from "./Filters";

const Employees = () => {
	const [resultsInput, setResultsInput] = useState(mockData);

	return (
		<>
			<div className="main-btn">
				<Xls
					data={resultsInput}
					className="xls-btn"
					content={"Export to xls"}
				/>
				<Pdf
					data={resultsInput}
					className="pdf-btn"
					content={"Export to pdf"}
				/>

				<Link to="/charts" style={{ textDecoration: "none" }}>
					<Button
						className="charts-btn"
						variant="contained"
						color="info"
					>
						Go to Charts
					</Button>
				</Link>
			</div>
			<Filters mockData={mockData} setData={setResultsInput} />

			<div className="data-table">
				<Table data={resultsInput} setData={setResultsInput} />
			</div>
		</>
	);
};

export default Employees;
