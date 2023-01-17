import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React, { Fragment, useState } from "react";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";

const Rows = ({ row }) => {
	const [open, setOpen] = useState(false);

	return (
		<Fragment>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell>
					{row.ORDERITEMS_SUBFORM.length > 0 && (
						<IconButton
							aria-label="expand row"
							size="small"
							onClick={() => setOpen(!open)}
						>
							{open ? (
								<KeyboardArrowUpIcon />
							) : (
								<KeyboardArrowDownIcon />
							)}
						</IconButton>
					)}
				</TableCell>

				<TableCell align="right">{row.CUSTNAME}</TableCell>
				<TableCell align="right">{row.CDES}</TableCell>
				<TableCell align="right">
					{new Date(row.CURDATE).toLocaleDateString()}
				</TableCell>
				<TableCell align="right">{row.ORDNAME}</TableCell>
				<TableCell align="right">{row.ORDSTATUSDES}</TableCell>
				<TableCell align="right">{row.TOTQUANT}</TableCell>
				<TableCell align="right">{row.QPRICE}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					style={{ paddingBottom: 0, paddingTop: 0 }}
					colSpan={6}
				>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography
								variant="h6"
								gutterBottom
								component="div"
							>
								הזמנות
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>שורה</TableCell>
										<TableCell>מקט</TableCell>
										<TableCell align="right">
											תיאור מקט
										</TableCell>
										<TableCell align="right">
											מחיר
										</TableCell>
										<TableCell align="right">
											כמות
										</TableCell>
										<TableCell align="right">
											סה"כ מחיר
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.ORDERITEMS_SUBFORM.map((orderRow) => (
										<TableRow key={orderRow.KLINE}>
											<TableCell
												component="th"
												scope="row"
											>
												{orderRow.KLINE}
											</TableCell>
											<TableCell>
												{orderRow.PARTNAME}
											</TableCell>
											<TableCell align="right">
												{orderRow.PDES}
											</TableCell>
											<TableCell align="right">
												{orderRow.PRICE}
											</TableCell>
											<TableCell align="right">
												{orderRow.QUANT}
											</TableCell>
											<TableCell align="right">
												{orderRow.QPRICE}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</Fragment>
	);
};

export default Rows;
