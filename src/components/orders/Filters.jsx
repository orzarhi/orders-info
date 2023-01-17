import { MenuItem, TextField } from "@mui/material";
import orderStatus from "../data/orderStatus";
import { filterByStatus, searchName } from "./config";
import "./Orders.css";

const Filters = ({ data, setData }) => {
	return (
		<div className="filters">
			<TextField
				id="outlined-select-currency"
				select
				label="סטטוס"
				className="input-select-search"
				defaultValue="0"
				onChange={(e) => filterByStatus(data, setData, e.target.value)}
			>
				{orderStatus.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
			<TextField
				id="outlined-search"
				label="לקוח"
				type="search"
				className="input-search"
				placeholder="חפש שם לקוח..."
				onChange={(e) => searchName(data, setData, e.target.value)}
			/>
		</div>
	);
};

export default Filters;
