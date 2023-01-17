import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./CollapsibleTable.css";
import Rows from "./Rows";

const CollapsibleTable = ({ data }) => {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table" sx={{ direction: "rtl" }}>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell align="right">מספר לקוח</TableCell>
						<TableCell align="right">שם לקוח</TableCell>
						<TableCell align="right">תאריך</TableCell>
						<TableCell align="right">מספר הזמנה</TableCell>
						<TableCell align="right">סטטוס</TableCell>
						<TableCell align="right">כמות</TableCell>
						<TableCell align="right">מחיר</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<Rows key={row.ORDNAME} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
export default CollapsibleTable;
