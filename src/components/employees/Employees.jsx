import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { columns } from "~/components/data/columns";
import Pdf from "~/components/pdf/Pdf";
import mockData from "~/mockData";
import Xls from "../xls/Xls";
import "./Employees.css";
import Filters from "./Filters";

const Employees = () => {
	const [resultsInput, setResultsInput] = useState(mockData);

	return (
		<>
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

			<Link to="/charts">
				<Button className="charts" variant="contained" color="info">
					Go to Charts
				</Button>
			</Link>

			<Filters mockData={mockData} setResultsInput={setResultsInput} />

			<div className="data-table">
				<DataGrid
					rows={resultsInput}
					columns={columns}
					pageSize={25}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
		</>
	);
};

export default Employees;
