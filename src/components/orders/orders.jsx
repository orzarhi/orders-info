import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ordersData from "../data/ordersNew";
import Xls from "../documents/xls/Xls";
import CollapsibleTable from "../table/CollapsibleTable";
import Filters from "./Filters";
import "./Orders.css";

const Orders = () => {
	const [resultsInput, setResultsInput] = useState(ordersData);

	// const { data, isLoading } = useOrders();
	// console.log("🚀data", data);

	return (
		<>
			<div className="main-btn">
				<Xls
					data={resultsInput}
					className="xls-btn"
					content={"Export to xls"}
				/>
				{/* <Pdf
					data={resultsInput}
					className="pdf-btn"
					content={"Export to pdf"}
				/> */}

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
			<Filters data={ordersData} setData={setResultsInput} />

			<div className="data-table">
				<CollapsibleTable
					data={resultsInput}
					setData={setResultsInput}
				/>
			</div>
		</>
	);
};

export default Orders;
