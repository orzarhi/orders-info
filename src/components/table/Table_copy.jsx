import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { MdDeleteForever, MdOutlineModeEdit } from "react-icons/md";
import { atWork } from "~/utils/atWork/atWork";
import Actions from "./actions/Actions";

const Table = ({ data, setData }) => {
	const [openModalDialog, setOpenModalDialog] = useState(false);
	const [openPopUp, setOpenPopUp] = useState(false);
	const [openAction, setOpenAction] = useState(false);
	const [employeeId, setEmployeeId] = useState("");

	const actionRow = (id, action) => {
		if (action === "delete") setOpenModalDialog(true);
		else if (action === "edit") setOpenPopUp(true);

		setEmployeeId(id);
		setOpenAction(true);
	};

	const columnsData = [
		{
			field: "CUSTNAME",
			headerName: "Cuset Name",
			width: 150,
		},
		{ field: "CDES", headerName: "Cdes", width: 150 },
		{
			field: "CURDATE",
			headerName: "Curdate",
			width: 150,
			renderCell: (params) => {
				return new Date(params.row.CURDATE).toLocaleDateString();
			},
		},
		{ field: "ORDNAME", headerName: "Ordname", width: 150 },
		{
			field: "ORDSTATUSDES",
			headerName: "מצב הזמנה",
			width: 150,
		},
		{
			field: "TOTQUANT",
			headerName: "סהכ כמות",
			width: 150,
		},
		{
			field: "QPRICE",
			headerName: "סהכ מחיר",
			width: 150,
		},
		{
			field: "actions",
			headerName: "פעולות",
			width: 150,
			sortable: false,
			disableColumnMenu: true,
			renderCell: (params) => {
				return (
					<>
						<IconButton
							title="Edit"
							onClick={() =>
								actionRow(params.row.ORDNAME, "edit")
							}
						>
							<MdOutlineModeEdit />
						</IconButton>
						<IconButton
							title="Remove"
							onClick={() =>
								actionRow(params.row.ORDNAME, "delete")
							}
						>
							<MdDeleteForever />
						</IconButton>
					</>
				);
			},
		},
	];

	return (
		<>
			<DataGrid
				rows={data}
				columns={columnsData}
				pageSize={25}
				rowsPerPageOptions={[5]}
				sx={{
					boxShadow: 5,
					border: 1,
					borderColor: "primary.light",
					"& .MuiDataGrid-cell:hover": {
						color: "primary.main",
					},
				}}
				getRowId={(row) => row.ORDNAME}
			/>
			{openAction && (
				<Actions
					openModal={openModalDialog}
					setOpenModal={setOpenModalDialog}
					employeeId={employeeId}
					setData={setData}
					openPopUpEdit={openPopUp}
					setOpenPopUpEdit={setOpenPopUp}
					setOpenAction={setOpenAction}
				/>
			)}
		</>
	);
};

export default Table;
