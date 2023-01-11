import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { MdDeleteForever, MdOutlineModeEdit } from "react-icons/md";
import { deleteEmp } from "../services/deleteEmp";
import Modal from "../modal/Modal";
import { atWork } from "~/utils/atWork/atWork";

const Table = ({ data, setData }) => {
	const [openModal, setOpenModal] = useState(false);
	const [employeeId, setEmployeeId] = useState("");

	const deleteRow = (id) => {
		setOpenModal(true);
		setEmployeeId(id);
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
							onClick={() => console.log(params.row)}
						>
							<MdOutlineModeEdit />
						</IconButton>
						<IconButton
							title="Remove"
							onClick={() => deleteRow(params.row.id)}
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
			/>
			{openModal && (
				<Modal
					setOpenModal={setOpenModal}
					onClick={() => deleteEmp(employeeId, setData)}
					title={"Are you sure?"}
					textButton={"Delete"}
				/>
			)}
		</>
	);
};

export default Table;
