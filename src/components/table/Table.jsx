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
			field: "avatar",
			headerName: "Avatar",
			width: 100,

			renderCell: (params) => {
				return (
					<img
						className="avatar"
						src={params.row.avatar}
						alt={`image - ${params.row.name}`}
					/>
				);
			},
		},
		{ field: "id", headerName: "ID", width: 100 },
		{ field: "name", headerName: "Full Name", width: 150 },
		{ field: "date_birth", headerName: "Date Birth", width: 140 },
		{
			field: "salary",
			headerName: "Salary",
			width: 130,
			renderCell: (params) => {
				return params.row.salary.toLocaleString();
			},
		},
		{
			field: "at_work",
			headerName: "At Work",
			width: 100,
			renderCell: (params) => {
				return atWork(params.row.at_work);
			},
		},
		{
			field: "actions",
			headerName: "Actions",
			width: 100,
			sortable: false,
			disableColumnMenu: true,
			renderCell: (params) => {
				return (
					<>
						<IconButton
							title="Edit"
							onClick={() => actionRow(params.row.id, "edit")}
						>
							<MdOutlineModeEdit />
						</IconButton>
						<IconButton
							title="Remove"
							onClick={() => actionRow(params.row.id, "delete")}
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
