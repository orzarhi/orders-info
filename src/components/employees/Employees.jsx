import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Link } from "react-router-dom";
import mockData from "~/mockData";
import Pdf from "~/components/pdf/Pdf";
import Xlsx from "../documents/Xlsx";
import { columns } from "~/components/data/columns";
import "./Employees.css";

const Employees = () => {
	return (
		<div>
			<Xlsx
				data={mockData}
				className="xlsx-btn"
				content={"Export to xls"}
			/>
			<Pdf />
			<Link to="/charts">
				<Button className="charts" variant="contained" color="info">
					Go to Charts
				</Button>
			</Link>
			<div className="filters"></div>
			<div className="data-table">
				<DataGrid
					rows={mockData}
					columns={columns}
					pageSize={25}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
		</div>
	);
};

export default Employees;
